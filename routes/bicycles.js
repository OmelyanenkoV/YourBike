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

router.get('/:id', async (req, res) => {
    const bicycle = await Bicycle.getById(req.params.id)
    res.render('bicycle', {
        layout: 'empty',
        title: `Велосипед ${bicycle.title}`,
        bicycle
    })
})

module.exports = router