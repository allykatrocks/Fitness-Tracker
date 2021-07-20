const router = require('express').Router();
const views = require('./views');
const apis = require('./apis');

router.use('/', views);
router.use('/api', apis);



module.exports = router;