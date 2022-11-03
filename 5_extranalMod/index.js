const http = require("http");
const PORT = 5000;
const hostName = "127.0.0.1";

const serverSid = http
.createServer((req, rSp) => {
  console.log(req.url);
  rSp.write("<h1>Wellcome to web </h1>");
  rSp.end();
});
serverSid.listen(PORT, hostName, () => {console.log(`start server url http://${hostName}:${PORT}`)});
