const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'hubara',
  api_key: '452952826474925',
  api_secret: '1ROcoOfQlE0D-iGjHXD468gzBGA',
});
module.exports = {
  getAllImages: (req, res) => {
    cloudinary.api.resources(
      { max_results: 10, prefix: 'liron-levi', type: 'upload' },
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err,
          });
        }
        return res.status(200).json(result.resources);
      }
    );
  },
};
