/** @format */

const express = require("express");
const router = express.Router();

const main = require("./main");
const meme = require("./meme");
const devEvent = require("./devEvent");
const newTech = require("./newTech");
const frontEnd = require("./devEvent/frontEnd");
const backEnd = require("./devEvent/backEnd");
const game = require("./devEvent/game");


// Use this URL to call the modal block configuration when the button block (action block) is pressed in the message.
router.use("/request", (req, res, next) => {
  switch (req.body.value) {
    default:
      next();
  }
});

// Use this URL to send information, which the user entered or selected in the modal screen sent from the request URL, to the POST request.
router.use("/callback", (req, res, next) => {
  switch (req.body.value) {
    case "main":
	  main.sendMessage(req, res, next);
      break;  
    case "meme":
      meme.sendMessage(req, res, next);
      break;
    case "dev_event":
      devEvent.sendMessage(req, res, next);
      break;
    case "new_tech":
      newTech.sendMessage(req, res, next);
      break;
    case "front_end":
      frontEnd.sendMessage(req, res, next);
      break;
    case "back_end":
      backEnd.sendMessage(req, res, next);
      break;
    case "game":
      game.sendMessage(req, res, next);
      break;

    default:
      next();
  }
});

// 모두에게 메세지 보내기
router.use("/", main.sendMessage);

module.exports = router;
