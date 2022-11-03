const http = require('http');
const Port = 4444;
const hostName= '127.0.0.1'
http.createServer((req,respons)=>{
   console.log(req.url);
    respons.write(`<h1> My name is aswoad</h2><br/>`)
    respons.end()
}).listen(Port,hostName,()=>{
    console.log(`http://${hostName}:${Port}`)
})