const express = require("express");
const authController = require("../controllers/auth.js");

const router = express.Router();
router.get('/', (req, res) => {
    res.render("index");
});

router.get('/student', (req, res) => {
    res.render("student", {error : req.flash('error'), success : req.flash('success')})
});

router.get('/login', (req, res) => {
    res.render("login", {error : req.flash('error')});
});

router.get('/mess', (req, res) => {
    res.render("mess")
});

router.get('/fee', (req, res) => {
    res.render("fee")
});

router.get('/rules', (req, res) => {
    res.render("rules")
});

router.get('/chats', (req, res) => {
    res.render("chats")
});

router.get('/input', (req, res) => {
    res.render("input")
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