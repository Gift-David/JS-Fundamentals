const argv = process.argv.slice(2)

if (/^-?\d+$/.test(argv)){
    console.log("My number: " + argv)
} else {
    console.log("Not a number")
}