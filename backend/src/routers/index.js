const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");

router.get("/api/data", indexController.get);

router.get("/api/search", indexController.search);

module.exports = router;
