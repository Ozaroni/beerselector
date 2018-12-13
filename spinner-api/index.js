const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
