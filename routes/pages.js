const express = require("express");
const authController = require("../controllers/auth.js");

const router = express.Router();
router.get('/', (req, res) => {
    res.render("index");
});

router.get('/student', (req, res) => {
    res.render("student")
});

router.get('/login', (req, res) => {
    res.render("login")
});

router.get('/dashboard', authController.studentlogin, (req, res) => {
    if (req.user) {
        res.render("dashboard");
    } else {
        res.render("student");
    }
})

router.get('/admin-dashboard', authController.adlogin, (req, res) => {
    if (req.user) {
        res.render("admin-dashboard");
    } else {
        res.render("login");
    }
})

module.exports = router;