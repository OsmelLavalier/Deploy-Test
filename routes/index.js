var express = require('express');
const router = express.Router();


router.get('/', async(req, res) => {
    res.send('Welcome to test deployment!!');
});


module.exports = router;