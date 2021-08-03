const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const name = (lines[0])
const salary = parseFloat(lines[1])
const sold   = parseFloat(lines[2])
const total  = salary + sold * 0.15
console.log(`TOTAL = R$ ${total.toFixed(2)}`)
