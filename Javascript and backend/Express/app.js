const express= require("express");
const path= require("path");
const port= 80;
const fs = require("fs");
const app =express();

app.set('view engine', 'pug')
app.use('/static',express.static('static'));
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    const con="this is the content for net";
    const params = {'title':'Pubg is best game',"content":con}
    res.status(200).render('index.pug',params);
});

app.post("/",(req,res)=>{
    name =req.body.name;
    age =req.body.age;
    gender =req.body.gender;
    address =req.body.address;
    more =req.body.more;
    let co = `the name of person is ${name} age of person is ${age} , ${gender} , ADdress is: ${address} ,About person: ${more}`;
    fs.writeFileSync('output.txt',co);
    const params = {'message':'Form submitted successfully'}
    res.status(200).render('index.pug',params);
});

app.listen(port,()=>{
    console.log(`the app started successfully ${port}`);
})