const express = require('express');
const router = express.Router();

// @route GET api/posts/testposts
// @desc test route
// @access Public
router.get('/testposts',(req, res)=>res.json());

module.exports = router;