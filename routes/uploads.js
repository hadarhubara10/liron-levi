const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');

const { uploadFile } = require('../controllers/uploads');
const convertDocxForHtml = require('../middlewares/convertToHtml');

router.get('/', function (req, res) {
  return res.send('Hello World!');
});
router.post('/', upload.single('file'), convertDocxForHtml, uploadFile);
// router.post('/convert', convertDocxForHtml);

module.exports = router;
