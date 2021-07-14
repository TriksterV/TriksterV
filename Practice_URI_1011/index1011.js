const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const pi = parseFloat(3.14159)
const R = parseInt((lines[0])
const R3 = Math.pow(R ** 3)
const vl = (4/3) * pi * R3
console.log(`VOLUME = ${vl}`)








