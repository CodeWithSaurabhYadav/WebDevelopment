<<<<<<< HEAD
const http = require("http");

const username = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h1>Hello World</h1>")
})

server.listen(port,username,()=>{
    console.log("Server is running...")
=======
const http = require("http");

const username = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end("<h1>Hello World</h1>")
})

server.listen(port,username,()=>{
    console.log("Server is running...")
>>>>>>> f2fa9370726e3125dc4d287a68a500c1d4499c09
})