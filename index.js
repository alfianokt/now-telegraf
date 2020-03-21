const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
const bot = require('./bot')

app.use(bodyParser.json())

app.get('/', (_, res) => {
  res.end('Hai disana')
})

// you can change the '/secret-path' with your own path
app.post('/secret-path', (req, res) => {
  bot.handleUpdate(req.body, res)
})

app.listen(port, err => {
  if (err) throw err
  console.log(`> App listen on port ${port}`)
})