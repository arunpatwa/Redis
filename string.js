const client=require('./client')

// const binaryExtensions = require('binary-extensions');

async function init(){
    await client.set("msg:6", "Hey from NodeJs")
    //"It will get expire after some time"
    await client.expire("msg:1",10)
    const result1= await client.get("user:1");
    const result2=await client.get("msg:6")
    console.log("Result1->",result1)
    console.log("Result2->",result2)
}

init();