const express = require("express");
const authController = require("../controllers/auth.js");

const router = express.Router();

router.post('/adlogin', authController.adlogin);
router.post('/studentregs', authController.studentregs);
router.post('/studentlogin', authController.studentlogin);

module.exports = router;