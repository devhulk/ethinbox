# Lab 1 - EthInbox

## Prereqs

### NodeJS must be installed

https://nodejs.org/en/

### Solidity Compiler needs to be installed

The solidity compiler is already in the package.json. After cloning repo run the following command inside the project.
``` bash
npm install
```

# Getting Familiar with the Development Process

## Step 1 - We need a way to compile our Solidity Contracts

This is the `compile.js` file in our project
``` javascript
// We need the 'fs' and 'path' module because we cannot just require or import a '.sol' file.
// NodeJS tries to execute as javascript anything that you 'import' or 'require'
const path = require('path')
const fs = require('fs')
const solc = require('solc')


// Getting the path to our Contract[s]
const ethInboxPath = path.resolve(__dirname,'contracts','EthInbox.sol')
// Reading our file line by line
const sourceCode = fs.readFileSync(ethInboxPath, 'utf-8')

// solc requires the source code we are reading in, as well as the number of contracts we are trying to compile
// If you want to get a better idea of what the compiler is doing just wrap the below statement in a 'console.log()'
console.log(solc.compile(sourceCode,1))

// when you are done exploring make sure to erase the above console log and replace it with the below code
// module.exports = solc.compile(sourceCode,1)

```
Check out the test folder for the actual web3 interaction with ganache.

Check the deploy.js file for the deployment to the Rinkeby Ethereum Test Network.






