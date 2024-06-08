const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})


app.post("/", (req, res) => {
    console.log(req.body.cityName);
    var city = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=319332d780a9ad226575fa583a641983&units=metric"
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const imageURL = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            res.write("<h1>Temparature: " + temp + "</h1>");
            res.write("<p>Description: " + desc + "</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
            //console.log("Temparature is:"+temp +'\n' +"Description: "+desc);


        })
    })




})

app.listen(3000, () => {
    console.log("server is running on port 3000...")
})



