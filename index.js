
const htt = require('http')

const PORT = 3000
// 这个拆开是下面的
const server = htt.createServer()

server.on("request",(req,res)=>{
    // res.writeHead(200,{
    //     // 'Content-Type':'text/plain',//简单文字
    //     'Content-Type':'application/json',//js数组
    //
    // })  //可以被拆分为statusCode和 setHeader
    // 注意 判断的是req 设置的是res
    if(req.url==="/friends"){
        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify({
            id:1,
            name:"lala"
        }))
        // res.json({ id: 1, name: 'lala' });
        // res.end() //上面的等同于这样写
    }else if(req.url==='/messages'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>')
        res.write('<li>Hello nihao</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        // 一定要写end
        res.end()
    }else {
        res.statusCode = 404
        res.end()
    }

})

// const server = htt.createServer((req,res)=>{
//     res.writeHead(200,{
//         // 'Content-Type':'text/plain',//简单文字
//         'Content-Type':'application/json',//js数组
//
//     })
//     // res.end('hello!')
//     res.end(JSON.stringify({
//         id:1,
//         name:"lala"
//     }))
// })

// http://localhost:3000/ PORT指的是3000 上面手动的设置
server.listen(PORT,()=>{
    console.log(`this is ${PORT} port`)//这里是本地输出 上面那个end是网页端输出

});
//The server.listen() method is a method in the Node.js HTTP module
// that starts a server to listen for incoming client requests on a specified port
// and hostname.
//
// When you run a Node.js program that includes the server.listen() method,
// it creates a server instance and starts listening on the specified port and hostname.
// This means that your Node.js program is now running as a server
// and is ready to receive incoming client requests on that port and hostname.