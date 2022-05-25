const student = require("../models/student");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileType = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

const createStudent =(upload.single("photo"),async (req, res) => {
    const newStudentData = {
      name: req.body.name,
      email: req.body.email,
      photo: req.file.filename,
    };

    const Student = new Student(newStudentData);

    try{
      const data = Student.save();
          return res.status(200).json({
            message: "Success",
            data: data,
    })
  }catch(err) {
        return res.status(500).json({
          message: "err",
          err, err
        });
      }
    });

module.exports = {
  createStudent
};
