const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const a  = parseFloat(lines[0])
const b  = parseFloat(lines[1])
const c  = parseFloat(lines[2])
const Striangle = a * c / 2.0
const pi = parseFloat(3.14159)
const Scircle   = pi * (c * c)
const Strapeze  = 0.5 * (a + b) * c 
const Ssquare = b ** 2.0
const Srectangle = a * b
console.log ( 
    `TRIANGULO: ${Striangle.toFixed(3)}\n` +
    `CIRCULO: ${Scircle.toFixed(3)}\n` +
    `TRAPEZIO: ${Strapeze.toFixed(3)}\n` +
    `QUADRADO: ${Ssquare.toFixed(3)}\n` +
    `RETANGULO: ${Srectangle.toFixed(3)}\n`
)