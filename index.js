const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello,Anindita')
})

app.listen(5060, ()=>{
    console.log("Started server");
}
)
