// const express = require("express");
// const https =require("https");  
// const bodyParser = require("body-parser"); 

// const app = express();

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/" , function(req ,res){

//   res.sendFile(__dirname + "/index.html");

    

//    app.post("/", function(req , res){
//     console.log(req.body.cityname);
//    ///separation
//    const query = req.body.cityname;
//    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=f3ca6e34726d3a9717b1f61a7ef6ea9d&units=metric"; 
//     // url daalo but phle ensure https:// hona chahiye   url weather waali   

//    https.get(url, function(response){
//        console.log(response.statusCode );

//        response.on("data" , function(data){
//          const weatherData = JSON.parse(data);
//          const temp = weatherData.main.temp
//          console.log(temp);
//          const weatherDescription = weatherData.weather[0].description
//          console.log(weatherDescription);
//           //icon nikalo data se
//           const icon =weatherData.weather[0].icon
//           console.log(icon);
//           const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

//          res.write("<h1>The temperature in " + query + " is " + temp + " degree Celsius.</h1>");
//          res.write("<h2> The weather is currently " + weatherDescription + "</h2>");

//          res.write("<img src=" + imageUrl+">");
//          res.send()
         
//        })

//    }); 
//    })

// });


// app.listen(8000 , function(){
//     console.log("Server is running on pport 8000");
// });


const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve static files from /public

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html"); // Updated path
});

app.post("/", function (req, res) {
  const query = req.body.cityname;
  const apiKey = "f3ca6e34726d3a9717b1f61a7ef6ea9d";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

  https.get(url, function (response) {
    let data = "";

    response.on("data", function (chunk) {
      data += chunk;
    });

    response.on("end", function () {
      const weatherData = JSON.parse(data);
      if (weatherData.cod === "404") {
        res.send(`<h1>City not found. Please go back and try again.</h1>`);
        return;
      }

      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      // res.write(`<h1>The temperature in ${query} is ${temp}°C.</h1>`);
      // res.write(`<h2>The weather is currently ${weatherDescription}.</h2>`);
      // res.write(`<img src="${imageUrl}" alt="Weather icon">`);
      // res.send();

      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather Result</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <form class="input">
    <h1>The temperature in ${query} is ${temp}°C</h1>
    <h2>The weather is currently ${weatherDescription}</h2>
    <img src="${imageUrl}" alt="Weather Icon">
    <br><br>
    <a href="/" style="text-decoration:none;">
      <button type="button">Check Another City</button>
    </a>
  </form>
</body>
</html>
`;
res.send(html);

    });
  });
});

app.listen(8000, function () {
  console.log("Server is running on port 8000");
});
