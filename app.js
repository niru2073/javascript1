const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);

    // res.write('<h1>hello</h1>');
    // res.end();
    
    if(req.url === '/') {
        // res.write('home');
        res.write('<html> <head><title>my</title></head><body>');

        res.write('<form action="/msg" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if(req.url === '/msg' && req.method==='GET') {
        res.setHeader('Content-Type','text/html');
        res.write('msg');
        return res.end();
    }
    res.write('invalid');
    return res.end();

});

server.listen(3000);