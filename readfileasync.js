const fs = require("fs")
console.log("script started")
    fs.readFile("text1.txt",function(err,data1){
if(err){
    console.log(err)
}
else{
    console.log("file read completed")
}
    })

console.log("script stopped")