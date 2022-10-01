const http= require('http');
const fs= require('fs');
const { url } = require('inspector');
const hostname='127.0.0.1';
const port =3000;
const home=fs.readFileSync('./home.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const services=fs.readFileSync('./services.html');
const server= http.createServer((req,res)=>{
    console.log(req.url);
    const url = req.url;
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url== '/'){
    res.end(home);
    }
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else{
        res.statusCode=404;
        res.end("<h1>Page not found 404</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});