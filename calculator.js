const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res)=>{
  res.sendfile(__dirname + "/index.html")
})

app.post('/',(req,res)=>{
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var results = num1 + num2
  console.log(req.body.num1)
  res.send("Thanks for posting, the result is : "+ results)
})

  app.get('/bmicalculator',(req,res)=>{
    res.sendfile(__dirname + "/bmiCalculator.html")
  })

  app.post('/bmiCalculator',(req,res)=>{
 var weight = Number(req.body.weight)
 var height = Number(req.body.height)
 var result = weight*height

 res.send("your bmi is "+ result)
     })


app.listen(3000)
