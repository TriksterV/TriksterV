const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const id = lines[0]
const hours = parseInt(lines[1])
const salary = parseFloat(lines[2])
const total = hours * salary
console.log(`NUMBER = ${id}\n` +
            `SALARY = U$ ${total.toFixed(2)}` 
)
