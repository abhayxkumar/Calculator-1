//jshint esversions:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(require, respond){
  respond.sendfile(__dirname + "/index.html");
});

app.post("/index.html",  function(request,respond){

  var num1 = Number(request.body.n1);
  var num2 = Number(request.body.n2);

  var result = num1 + num2;
  respond.send("The result of calculation is " + result);
});

app.get("/bmiCalculator", function(request,respond){
  respond.sendfile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(request, respond){
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);

  var bmi = weight / (height * height);
  respond.send("your BMI is " + bmi);

});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
