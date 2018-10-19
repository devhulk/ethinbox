const assert = require('assert');
const { interface, bytecode } = require('../compile')
// Ganache equips us with a provider for our Test Network and some seed accounts
const ganache = require('ganache-cli');
// Uppercase because Web3 has a constructor
const Web3 = require('web3');

/*
**IMPORTANT CONCEPT**
 Below we instantiate Web3 and configure it with a "provider"
 This "provider" will change depending on what network we are trying to connect to.
 Here we are testing so we are connecting to the ganache provider that will allow us to connect to ganache test network
*/
const provider = ganache.provider()
const web3 = new Web3(provider);

/*
 Before we run each of our tests we want to create a smart contract on the test network. This is done with "beforeEach".
 After this step we use "it" to describe each individual test case
 https://mochajs.org/#run-cycle-overview
 */
let accounts;
let ethinbox;

beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of the accounts to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({from: accounts[0], gas: '1000000'})

    inbox.setProvider(provider)
});

describe('EthInbox', () => {
    // Lets assert that we successfully deployed a contract by getting the address
    it('deploys a contract', () => {
        assert.ok(inbox.options.address)
    });

    it('has a default message', async () => {
        // We use ".call" when we are just reading from the network (no fee incurred)
       const message = await inbox.methods.message().call();
       assert.equal(message, 'Hi there!');
    });

    it('can change the message', async () => {
        // We use ".send" when we are adding a transaction. Account to pay gas cost must be specified
        await inbox.methods.setMessage('This is a new message!').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'This is a new message!')
    });
});


