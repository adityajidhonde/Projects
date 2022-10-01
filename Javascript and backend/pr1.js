const fs = require('fs');
const http=require('http');
const fc =fs.readFileSync('sam.html','utf-8');
const ser=http.createServer((req,res)=>{
    res.writeHead(323,{'Content-type':'text/html'});
    res.end(fc);
})
ser.listen(82,'127.0.0.2',()=>{
    console.log("listening on port 80");
});