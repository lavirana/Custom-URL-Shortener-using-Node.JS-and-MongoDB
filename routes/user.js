const express = require("express");
const {handelUserSignup, handleUserlogin } = require("../controllers/user");
const router = express.Router();

router.post('/', handelUserSignup)
router.post('/login', handleUserlogin)


module.exports = router;