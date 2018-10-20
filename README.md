# Lab 1 - EthInbox

## Prereqs

### NodeJS must be installed

https://nodejs.org/en/

### Solidity Compiler needs to be installed

The solidity compiler is already in the package.json. After cloning repo run the following command inside the project.
``` bash
npm install
```

### Notes for Windows Users

If you run haven't done nodejs development on your machine before then make sure to install the windows-build-tools
```
npm i -g --production windows-build-tools
```
This will install and point node to a version of python and some other stuff...

If you haven't done a lot of development on your machine the odds are you will also have to download .NET.
The easy way to get this done is to install the latest version of Visual Studio Community Edition.

*** There is a difference between VS Code and Visual Studio Community Edition ***

Then open Visual Studio and go File > New > Open Visual Studio Installer

Check the following
    - Desktop development with C++
    - Linux development with C++

Allow it to install and now you should be able to run ```npm install``` for ethinbox without any issues. #yaywindows

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






