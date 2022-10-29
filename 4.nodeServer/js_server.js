const http = require("http");
const port = 5000;
const hostName =`127.0.0.1`
http
  .createServer((req, resp) => {
    resp.end(`<h1>hellow world i thik is running</h1>`);
  })
  .listen(port,hostName, () => {console.log(`serverRunning......click to Open: http://${hostName}:${port}`)});
