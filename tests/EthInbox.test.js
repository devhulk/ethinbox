const assert = require('assert')
const ganache = require('ganache-cli')
// Uppercase because Web3 has a constructor
const Web3 = require('web3')

/*
**IMPORTANT CONCEPT**
 Below we instantiate Web3 and configure it with a "provider"
 This "provider" will change depending on what network we are trying to connect to.
 Here we are testing so we are connecting to the ganache provider that will allow us to connect to ganache test network
*/
const web3 = Web3(ganache.provider())
