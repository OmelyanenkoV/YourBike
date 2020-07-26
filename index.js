const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { ppid } = require('process')
const app = express()
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const bicyclesRoutes = require('./routes/bicycles')

// registration and setup handlebars
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// registration public css
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))

// routes
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/bicycles', bicyclesRoutes)














const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is working... on port ${PORT}`)
})