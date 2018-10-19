/*
 Here we are going to deploy to a real ethereum test network (Rinkeby)
 vs.
 Our local ganache test network
 */
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
require('dotenv').config();


const provider = new HDWalletProvider(
    process.env.MNEMONICPHRASE,
    'https://rinkeby.infura.io/v3/4d0d3a2836be4ee1a5d279bf18a4a133'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Initial Message']})
        .send({gas: '1000000', from: accounts[0]})

    console.log('Constract deployed to ', result.options.address);
};

deploy();
