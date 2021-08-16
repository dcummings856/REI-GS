const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/custom', (req, res) => {
  res.render('custom.ejs')
})

app.get('/details', (req, res) => {
  res.render('details.ejs')
})


app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on localhost:${PORT}`)
})