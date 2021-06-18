var fs = require("fs");
var multer = require("multer");
var upload = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        var newfilename = Date.now() + "-" + file.originalname;
        res.locals.fname = newfilename;
        cb(null, newfilename);
    },
  });
  // var imagefilter = (req, file, cb) => {
    // console.log(file)
    // cb(null, !fs.existsSync("d:\\javascript\\school\\uploads\\" + file.originalname));
  // };
  // const upload = multer({ storage: storage, fileFilter: imagefilter }).array("files",100);
  const upload = multer({ storage: storage }).array("files",100);
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send("Something went wrong!");
    }
    // res.json({ message: "Successfully uploaded files"});
    next();
  });
};
module.exports = upload;
