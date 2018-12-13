const path = require('path')
const express = require('express')
const app = express()
const port = 5000

app.get('/beers', (req, res) => {
  res.send([
    'Founder\'s Breakfast Stout',
    'Brooklyn Black Chocolate Stout',
    'Bel\'s Expedition Stout',
    'Molson Canadian',
    'Founder\'s KBS',
    'Anheuser-Busch brands',
    'Fat Tire',
    'Blue Moon',
    'Heineken',
    'Pilsner Urquell',
    'Stella Artois',
    'Miller Lite'
  ])
})

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
