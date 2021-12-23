const express = require("express");
const { getAllCommnets, removeComment } = require("../controllers/comments");

const router = express.Router();
router.get("/comments", getAllCommnets);
router.delete("/comment", removeComment);
module.exports = router;
