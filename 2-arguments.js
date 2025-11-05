const { argv } = require('node:process');

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// if (! argv){
//     console.log("No argument")
// }
// else if (argv > 2)  {
//     console.log("argument")
// }

console.log(argv)

// Write a script that prints a message depending of the number of arguments passed:

// If no arguments are passed to the script, print “No argument”
// If only one argument is passed to the script, print “Argument found”
// Otherwise, print “Arguments found”
// You must use console.log(...) to print all output
// You are not allowed to use var
// Reference: process.argv