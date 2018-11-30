const express = require('express');
const router = express.Router();

// @route GET api/progile/testprofile
// @desc test route
// @access Public
router.get('/testprofile',(req, res)=>res.json());

module.exports = router;