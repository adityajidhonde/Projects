const express= require("express");
const path= require("path");
const port= 8000;
const app =express();
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });

const Contact = mongoose.model('Contact', contactSchema);

app.set('view engine', 'pug')
app.use('/static',express.static('static'));
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded());

 
app.get("/",(req,res)=>{
    const params = {};
    res.status(200).render('home.pug',params);
});

app.get("/contact",(req,res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
});

app.post("/contact",(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your data has been saved");
    }).catch(()=>{
        res.status(400).send("Items dismissed");
    });
    //res.status(200).render('contact.pug',params);
});

app.listen(port,()=>{
    console.log(`the app started successfully ${port}`);
});