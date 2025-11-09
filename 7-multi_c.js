const argv = process.argv.slice(2)

if (/^-?\d+$/.test(argv)){
    let sentence = "C is fun"
    for (let index = 0; index < argv; index++) {
        console.log(sentence);
    }
    
} else {
    console.log("Missing number of occurrences")
}
