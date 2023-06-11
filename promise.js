console.log("started")
new Promise((resolve,reject)=>{
    //we can write only 1 statement here
    resolve();
}).then((value)=>{
return 1;
}).then((value)=>{
    throw new Error("error occured");
    setTimeout(()=>{
        console.log("1 second")
    },value*1000)
    return 2;
    }).then((value)=>{
        setTimeout(()=>{
            console.log("2 second")
        },value*1000)
        return 3;
        }).then((value)=>{
            setTimeout(()=>{
                console.log("3 second")
            },value*1000)
            return 4;
            }).catch((err)=>{
                console.log(err)
            })
console.log("stopped")