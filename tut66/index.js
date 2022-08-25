const http = require("http");
const fs = require("fs");
let code = fs.readFileSync("index.html");

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(code);
})

server.listen(80,'127.0.0.1', ()=>{
    console.log("Server started at : http://127.0.0.1:80");
});