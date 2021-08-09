const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const parts1  = lines[0].split(' ')
const x1  = parseFloat(parts1[0])
const y1  = parseFloat(parts1[1])

const parts2  = lines[1].split(' ')
const x2  = parseFloat(parts2[0])
const y2 = parseFloat(parts2[1])

const distance = Math.hypot (x1 - x2, y1 - y2)

console.log(distance.toFixed(4))

