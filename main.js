const express = require('express')
const app = express()

// Responde com 'hello world' quando uma requisição é feita à homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, '0.0.0.0');