// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000)

// ctrl + c to stop. 
// This logs 'hello world' to terminal 1000 x's
// 