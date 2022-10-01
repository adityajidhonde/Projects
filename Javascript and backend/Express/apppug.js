const express= require("express");
const path= require("path");
const port= 80;
const app =express();

app.set('view engine', 'pug')
app.use('/static',express.static('static'));
app.set('views', path.join(__dirname, 'views'))

app.get("/demo",(req,res)=>{
    res.status(200).render('index.pug')
});

app.listen(port,()=>{
    console.log(`the app started successfully ${port}`);
})