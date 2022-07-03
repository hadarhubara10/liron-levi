
module.exports = {
  uploadFile: async (req, res) => {
    console.log(req.file);
    console.log('req.convertToHtml', req.convertToHtml);
    return res.status(201).json({ docxToHtml: req.convertToHtml });
  },

  // convertDocxForHtml: async (req, res) => {
  //   mammoth
  //     .convertToHtml({ path: './uploads/test.docx' })
  //     .then(function (result) {
  //       const html = result.value; // The generated HTML
  //       const messages = result.messages; // Any messages, such as warnings during conversion
  //       console.log(result);
  //       return res.send(html);
  //     })
  //     .done();
  // },
};
