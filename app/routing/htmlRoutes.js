
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controller.js")

router.route("/").get(controller.homePage);
router.route("/survey").get(controller.surveyPage);

module.exports = router;
