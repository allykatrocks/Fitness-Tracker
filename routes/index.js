const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send('success')
})



module.exports = router;