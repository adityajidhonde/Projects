var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adityaKart', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  // we're connected!
  //console.log("we are connected bro");
//});

var kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    var greeting = "Kitten name is" + this.name
    console.log(greeting);
  }
  
var Kitten = mongoose.model('Kitten', kittySchema);

var aditya = new Kitten({ name: 'AdityaName' });
const skhd = new Kitten({name:'AmitName'});
//console.log(aditya.name); // 'Silence'
//aditya.speak();

skhd.save(function (err, skhd) {
    if (err) return console.error(err);
    skhd.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })