const fs = require("fs")
console.log("script started")
try{
    const data = fs.readFileSync("text1.txt")
    console.log("file read completed")
}
catch(err){
    console.log(err)
}
console.log("script stopped")
