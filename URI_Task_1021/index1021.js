const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const whole = Math.trunc(amount)
const R$100 = Math.trunc (whole / 100)
const R$50  = Math.trunc (whole % 100 / 50)
const R$20  = Math.trunc (whole % 100 % 50 / 20)
const R$10  = Math.trunc (whole % 100 % 50 % 20 / 10)
const R$5   = Math.trunc (whole % 100 % 50 % 10 / 5)
const R$2   = Math.trunc (whole % 100 % 50 % 10 % 5 / 2)
const R$1   = whole % 100 % 50 % 20 % 10 % 5 % 2

const rest = Math.trunc((amount - whole) * 100)
const R$050 = Math.trunc (rest / 50)
const R$025 = Math.trunc (rest % 50 / 25)
const R$010 = Math.trunc (rest % 50 % 25 / 10)
const R$005 = Math.trunc (rest % 50 % 25 % 10 / 5)
const R$001 = rest % 50 % 25 % 10 % 5

console.log(`NOTAS:
${R$100} nota(s) de R$ 100.00
${R$50} nota(s) de R$ 50.00
${R$20} nota(s) de R$ 20.00
${R$10} nota(s) de R$ 10.00
${R$5} nota(s) de R$ 5.00
${R$2} nota(s) de R$ 2.00
MOEDAS:
${R$1} moeda(s) de R$ 1.00
${R$050} moeda(s) de R$ 0.50
${R$025} moeda(s) de R$ 0.25
${R$010} moeda(s) de R$ 0.10
${R$005} moeda(s) de R$ 0.05
${R001}  moeda(s) de R$ 0.01`)