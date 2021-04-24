/** @format */

const express = require("express");
const router = express.Router();

const { sendMessage, sendModal, sendResult } = require("./example.ctrl");

router.get("/", sendMessage);

router.post("/request", sendModal);

router.post("/callback", sendResult);

module.exports = router;
