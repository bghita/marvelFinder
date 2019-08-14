
const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controller.js")

router.route("/api/friends").get(controller.friendsData);
router.route("/api/user").post(controller.compareScores);

module.exports = router;
