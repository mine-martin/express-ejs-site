const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.use(express.static('public'))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//Routes
app.use('/', require('./routes/index'))
app.use('/pages', require('./routes/index'))

const Port = process.env.Port || 8500

app.listen(Port, console.log(`Server started on Port ${Port}`))