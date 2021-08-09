const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split(' ');

const num1 = parseFloat(parts[0])
const num2 = parseFloat(parts[1])
const num3 = parseFloat(parts[2])

const max1 = (num1 + num2 + Math.abs(num1 -num2)) / 2
const max2 = (max1 + num3 + Math.abs(max1 -num3)) / 2

console.log(max2 + "eh o maior")

