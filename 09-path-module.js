const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

// get the base file name (in this case: test.txt)
const base = path.basename(filePath)
console.log(base)

// __dirname is a reserved statement, for the absolute directory path (for cwd)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
