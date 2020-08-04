const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './path/to/static/assets')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', require('./api'))
