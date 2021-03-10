const { spawn } = require('child_process')
const mnemonic = 'supreme banner leisure dinosaur fold text friend ivory vacant city room poet'
spawn('npx', ['ganache-cli', '-p 8545', '-d', `-m ${mnemonic}`, '-l 9900000', '-e 1000', '-g 10000000'])
