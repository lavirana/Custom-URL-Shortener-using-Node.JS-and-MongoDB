const express = require("express");
const router = express.Router();
const {handleNewShortUrl, handelAnalytics} = require("../controllers/url");


router.post("/", handleNewShortUrl);
router.get("/analytics/:shortId", handelAnalytics)

module.exports = router;