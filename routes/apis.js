const router = require('express').Router();

//get /api/workouts
//post /api/workouts
//put /api/workouts
//get /api/workouts/range

router.get('/workouts', async (req, res) => {
    res.send('success')
})

router.put('/workouts', async (req, res) => {
    res.send('success')
})

router.post('/workouts', async (req, res) => {
    res.send('success')
})

router.get('/workouts/range', async (req, res) => {
    res.send('success')
})
module.exports = router;