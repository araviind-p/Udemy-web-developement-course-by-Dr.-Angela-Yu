const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit:fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango=new Fruit({
  name:"Mango",
  rating:6,
  review:"Decent fruit",
});


const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!",
});
const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me",
});
const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weired texture",
});

Person.updateOne({name:"John"},{favouriteFruit:kiwi}).then(()=>{
  console.log("Updated succesfully");
  mongoose.connection.close();
}).catch((err)=>{
  console.log("err");
});
