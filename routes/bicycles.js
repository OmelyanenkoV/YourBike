const {Router} = require('express')
const Bicycle = require('../models/bicycle')
const router = Router()

router.get('/', async (req, res) => {
    const bicycles = await Bicycle.getAll()
    res.render('bicycles', {
        title: 'Велосипеды',
        isBicycles: true,
        bicycles
    })
})


module.exports = router