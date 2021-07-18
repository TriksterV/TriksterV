const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
//first product
const code1 = parseInt(lines[0])
const units1 = parseInt(lines [1])
const price1 = parseFloat(lines[2])
const totalprice1 = units1 * price1 
//second prouct 
const code2 = parseInt(lines[3])
const units2 = parseInt(lines [4])
const price2 = parseFloat(lines[5])
const totalprice2 = units2 * price2 
const totalprice3 = totalprice1 + totalprice2
console.log (`VALOR A PAGAR: R$ ${totalprice3.toFixed(2)}`)