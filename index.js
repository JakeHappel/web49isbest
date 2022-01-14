require('dotenv').config()

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})
app.get('/users', (req, res) => {
    res.json({Users: 'Jimmy Timmy Robby Bobby'})
})


// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})