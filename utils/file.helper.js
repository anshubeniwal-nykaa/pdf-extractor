const fs = require("fs");

exports.deleteFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) console.error("Error deleting file:", err.message);
  });
};
