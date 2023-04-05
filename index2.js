
const htt = require('http')

const PORT = 3000
// 这个拆开是下面的
const server = htt.createServer()

const friends = [
    {
        id:1,
        name:"sir this way"
    },
    {
        id:2,
        name:"sir that way"
    },
    {
        id:3,
        name:"sir those ways"
    }
]

//对象数组 对应网址的不同链接数字写法
server.on("request",(req,res)=>{
    const items = req.url.split("/")
    // loaclhost:3000/friends/2 测试网址
    if(req.method==="POST"&&items[1]==="friends"){
        //post 拿到的数据是object  不是json 要toString才能用
        // 只要是网址中间位置是friends 就能post进来data

        // fetch('http://localhost:3000/friends/5',{ //http://localhost:3000/friends 这样也行
        //     method:'POST',
        //     body:JSON.stringify({id:5,name:"time"})})

        req.on('data',(data)=>{
            console.log(typeof data)
            const friend = data.toString()
            console.log('Request:',friend)
            console.log(JSON.parse(friend))
            friends.push(JSON.parse(friend))
        })
        //这样可以把request的内容写入response
        req.pipe(res)
        // Java 中这么多一串被一个pipe 给压缩了
        //InputStream inputStream = new FileInputStream("input.txt");
        // OutputStream outputStream = new FileOutputStream("output.txt");
        //
        // byte[] buffer = new byte[1024];
        // int bytesRead;
        // while ((bytesRead = inputStream.read(buffer)) != -1) {
        //     outputStream.write(buffer, 0, bytesRead);
        // }
        //
        // inputStream.close();
        // outputStream.close();

    }else if(req.method==='GET'&& items[1]==="friends"){
        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        if(items.length===3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex-1]))
        }else {
            res.end(JSON.stringify(friends))
        }
    }else if(req.method==='GET' && items[1]==='messages'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>')
        res.write('<li>Hello nihao</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')

        res.end()
    }else {
        res.statusCode = 404
        res.end()
    }

})

server.listen(PORT,()=>{
    console.log(`this is ${PORT} port`)//这里是本地输出 上面那个end是网页端输出

});
