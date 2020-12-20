const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.get('/',function(req,res){

  var today = new Date();

  if(today.getDay() == 6 || today.getDay() == 0)
  {
    res.send("It's a weekend Baby")
  }
  else{
    res.send("Yeer")
  }
//  res.sendFile(__dirname + '/index.html')
})

app.listen(2020,function(){
  console.log("App is running")
})
