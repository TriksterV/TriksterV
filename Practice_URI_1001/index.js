const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n'); //0: '10'
                                 //1: '9
const a = parseInt(lines[0])  
const b = parseInt(lines[1])

const x = a + b

console.log(`X = ${x}`)