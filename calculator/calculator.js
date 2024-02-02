const calculator = require('express');
const app = calculator();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", (req, res) => {
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var result = num1 + num2;
    res.send("sum is: " + result);
});
app.post("/bmiCalculator",(req,res)=>{
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var bmi=weight/(height*height);
    var bmi=Math.round(bmi);
    res.send("Your BMI value is : "+bmi);
});

app.listen(3000, () => {
    console.log("server started!");
});