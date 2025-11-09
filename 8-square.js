
const argv = process.argv.slice(2)

if (/^-?\d+$/.test(argv)){
    let sentence = "C is fun"
    for (let index = 0; index < argv; index++) {
        console.log("X".repeat(argv));
    }
    
} else {
    console.log("Missing size")
}
