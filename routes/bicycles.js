const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('bicycles', {
        title: 'Велосипеды',
        isBicycles: true
    })
})


module.exports = router