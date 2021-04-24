/** @format */

const express = require("express");
const router = express.Router();

router.use("/", require("./example"));

module.exports = router;
