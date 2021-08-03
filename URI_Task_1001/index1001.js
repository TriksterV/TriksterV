const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let R = parseInt(lines[0])
const pi = parseFloat(3.14159)
const R3 = Math.pow(R, 3)
const vl = parseFloat((4/3.0) * pi * R3)
console.log(`VOLUME = ${vl.toFixed(3)}`)