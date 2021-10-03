const express = require("express");
const {
  getAllInfo,
  addCourses,
  removeCourse,
  getCourse,
  updateCourse,
} = require("../controllers/education");

const router = express.Router();

router.get("/info", getAllInfo);
router.get("/getCourse", getCourse);
router.post("/addcourse", addCourses);
router.put("/update", updateCourse);
router.delete("/removecourse", removeCourse);

module.exports = router;
