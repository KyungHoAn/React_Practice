// express.js -> web application framework for Node.js (node.js)를 쉽게 이용할 수 있게 도와주는 framework

const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})