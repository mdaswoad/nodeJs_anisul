const http = require("http");
const port = 5000;
const hostName =`127.0.0.1`
const fs =require('fs');
let TextData
fs.readFile('../2_builtinModules/ReadMe.md','utf-8',function(e,data){
    TextData= data?data:e;
})
http
  .createServer((req, resp) => {
    resp.writeHead(202,{'Content-Type':'text/html'})
    resp.write(TextData);
    resp.end();
  })
  .listen(port,hostName, () => {console.log(`serverRunning......click to Open: http://${hostName}:${port}`)});
