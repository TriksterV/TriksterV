const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const parts1  = lines[0].split(' ')
const parts2  = lines[1].split(' ')
const x1  = parseFloat(parts1[0])
const y1 = parseFloat(parts1[1])

const x2  = parseFloat(parts2[0])
const y2 = parseFloat(parts2[1])

console.log(`(${x1}, ${y1}), (${x2}, ${y2})`)


