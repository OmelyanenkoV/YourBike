const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Добавить велосипед',
        isAdd: true
    })
})


module.exports = router