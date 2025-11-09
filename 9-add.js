const argv = process.argv.slice(2)

function addition(a, b) {
    a = Number(argv[0])
    b = Number(argv[1])
    return console.log(a + b)
}
 addition()


// Write a script that prints the addition of 2 integers

// The first argument is the first integer
// The second argument is the second integer
// You have to define a function with this prototype: function add(a, b)
// You must use console.log(...) to print all output
// You are not allowed to use var