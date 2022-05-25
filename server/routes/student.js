const express = require("express");
const router = express.Router();
const { createStudent } = require("../controller/student");

router.post("/", createStudent);

module.exports = router;
