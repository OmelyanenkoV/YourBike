const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const { ppid } = require('process')
const app = express()

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






app.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная страница',
        isHome: true
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Добавить велосипед',
        isAdd: true
    })
})
app.get('/bicycles', (req, res) => {
    res.render('bicycles', {
        title: 'Велосипеды',
        isBicycles: true
    })
})








const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is working... on port ${PORT}`)
})