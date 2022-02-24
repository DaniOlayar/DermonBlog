require('dotenv').config({
  path: '.env'
})

const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const indexRouter = require('./routes/index')
const articleRouter = require('./routes/articles')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })

app.set('view engine', 'ejs')
app.set('layout', 'layout/layout')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(expressLayouts)

// * Routes
app.use('/', indexRouter)
app.use('/articles', articleRouter)

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log(`Server running successfully`);
})
