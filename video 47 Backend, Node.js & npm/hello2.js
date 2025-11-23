import http from "http";

let server = http.createServer(function (req, res) {
  res.setHeader("content-Type","text/html" );
  res.end("hello world");
});
server.listen(3000);
