const {Router} = require('express')
const Bicycle = require('../models/bicycle')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить велосипед',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const bicycle = new Bicycle(req.body.title, req.body.price, req.body.img)

    await bicycle.save()
    res.redirect('/')
})

module.exports = router