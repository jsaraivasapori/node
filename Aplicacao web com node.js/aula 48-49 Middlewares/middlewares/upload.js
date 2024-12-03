const multer = require("multer");

const uploadMilddlewares = multer({
  dest: "uploads",
});

module.exports = uploadMilddlewares;
