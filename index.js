const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'YOU COME AT THE KING, BEST NOT MISS' })
})

app.listen(7200, () => {
  console.log('Up and running')
});