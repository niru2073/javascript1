const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>My App</title></head>');
        res.write('<body><form method="POST" action="/message">');
        res.write('<input type='text' name="box">');
        res.write('<button type="submit">ADD Item</button>');
        res.write('</form></body>');
        res.write('<html>');
        return res.end();

    }
    if(url==='/message' && req.method=== "POST"){
        fs.writeFileSync('message.txt','hello text');
        res.statusCode=302;
        res.setHeader('content type','text/html');
        res.setHeader('location','/');
        res.write('<h1>message received</h1>');
        return res.end();

    }
    res.write('<html>');
    res.write('<head><title>my app</title></head>');
    res.write('<body><h1>hello from nodejs</h1></body');
    res.write('</html>');
    res.end;

});
server.listen(3000);
    


