const fs = require('fs');
const mammoth = require('mammoth');
const { removeFile } = require('../helper/removeFile');

const convertDocxForHtml = async (req, res, next) => {
  const filePath = req.file.path;
  console.log('path', req.file.path);
  const options = {
    styleMap: ['u => em'],
  };
  await mammoth
    .convertToHtml({ path: './' + req.file.path, options })
    .then((result) => {
      const html = result.value; // The generated HTML
      const messages = result.messages; // Any messages, such as warnings during conversion
      // console.log(html);
      req.convertToHtml = html;
      removeFile(filePath);
      next();
    })
    .catch((err) => {
      removeFile(filePath);
      return res.status(400).json(err);
    })
    .done();
};
module.exports = convertDocxForHtml;
