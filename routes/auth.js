const express = require("express");
const authController = require("../controllers/auth.js");

const router = express.Router();

router.post('/adlogin', authController.adlogin);
router.post('/studentregs', authController.studentregs);
router.post('/studentlogin', authController.studentlogin);
router.post('/registration', authController.registration);
router.post('/database', authController.database);
router.post('/payment', authController.payment);
router.post('/input', authController.input);
router.post('/chat', authController.chat);

module.exports = router;