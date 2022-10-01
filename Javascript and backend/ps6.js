//Inserting data in mongo db
use adityaKart
db.items.insertOne({name:"Samsung 30s",price:22000,rating: 4.5,qty:233,sold:98})
db.items.insertMany([{name:"Samsung 30s",price:22000,rating: 4.5,qty:233,sold:98},{name:"Nokia 0s",price:22000,rating: 4.5,qty:233,sold:98}])
db.items.find({name:"Nokia 0s"},{rating})