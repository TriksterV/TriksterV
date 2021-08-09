const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const n = parseInt(input);
const days = parseInt(input)

const years    = Math.trunc(days / 365)
const months   = Math.trunc(days % 365 / 30)
const restDays = days % 365 % 30

console.log(
    `${years} ano(s)\n` +
    `${months} mes(es)\n` +
    `${restDays} dia(s)`
)

