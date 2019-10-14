const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('YOU COME AT THE KING, BEST NOT MISS')
})

app.listen(7200);