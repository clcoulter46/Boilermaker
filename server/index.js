const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("knock knock")
  console.log("who's there")
  console.log(`your server, listening on port ${port}`)

//logging middleware
app.use(morgan('dev'));

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: true})) //using this bc it's in jpfp, not sure what it's for
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', require('./api')) //leads to routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) //send index.html for non-api requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error')
})


})

module.exports = app
