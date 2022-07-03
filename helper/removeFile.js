const fs = require('fs');
const removeFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`${filePath} deleted`);
    });
  }
};

exports.removeFile = removeFile;
