const express = require("express"),
  exampleController = require("../controllers/exampleController");

const router = express.Router();

router.post("/throwError", exampleController.throwError);

module.exports = router;
