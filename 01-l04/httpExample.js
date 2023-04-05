// 讲的 require
// require 就是你要什么模块就直接require
// http 要对应下面网址的http协议
// 或者用https
// const http = require('http');
// const https = require('https');
// 当我们搭配解构
const {request} = require('https')
const req = request('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`${chunk}`)
    });
    //这行的意思是运行完了输出end
    res.on('end',()=>{
        console.log("no more data")
    })
});
req.end()
// 用get 进一步简化

const {get} = require('https')
const ge = get('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`${chunk}`)
    });
    res.on('end',()=>{
        console.log("no more data")
    })
});
//get直接就不用end了
req.end()

