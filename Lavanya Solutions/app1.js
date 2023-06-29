var express = require('express');
var app = express();
var path = require('path');
const fs = require("fs");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect('mongodb://localhost/probase', {useNewUrlParser: true});

const cSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});

const Contact = mongoose.model('saloon', cSchema);

app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}))

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) 
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/submit-form', (req, res)=>{
  var myData = new Contact(req.body);
  myData.save().then(()=>{
    res.status(200).render('thank.pug');
  }).catch(()=>{
  res.status(400).send("item was not saved to the databse")
});
})

app.listen(80);