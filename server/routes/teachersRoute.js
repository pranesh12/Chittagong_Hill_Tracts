const express = require("express");
const { getAllTeachers } = require("../controllers/teachers");

const router = express.Router();

router.get("/teachers", getAllTeachers);

module.exports = router;
