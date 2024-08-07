const express = require('express');
const index = require('../controller/index');
const router = express.Router();
router.get('/index',index.getIndex);
module.exports = router;
