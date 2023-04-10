const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello,Anindita Here')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
