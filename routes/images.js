const express = require('express');
const { getAllImages } = require('../controllers/images');
const router = express.Router();

router.get('/', getAllImages);

module.exports = router;
