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

```
go into the file and add the console.log() like above...

then go ahead and run `node compile.js`

Pay special attention to the `bytecode` and `interface` keys on the object.




