const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
// const express = require("express");
// const app = express();
// // const dotenv = require("dotenv").config();
// // const cookieParser = require("cookie-parser");

// app.use(express.static('public'));
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

exports.adlogin = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?", [username, password], function (error, results, fields) {
        if (results.length > 0) {
            //   return res.sendFile(__dirname + "/dashboard.html", {
            //   })
            // res.redirect("/dashboard");
            // return;
            // console.log(results)
                return res.render("admin-dashboard", {
                message: 'admin logged in'
                });
        } else {
                // res.redirect("/");
                // return;
                return res.render("login",{
                  message: 'wrongg'
              })
        }
        res.end();
    })
}

exports.studentregs = async function (req, res) {
    // const { name, susername, password, passwordConfirm } = req.body;
    var rusername = req.body.rusername;
    var ruserpass = req.body.ruserpass;
    connection.query('SELECT user_name from loginuser WHERE user_name = ?', [rusername], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                return res.render("student", {
                    message: 'The email is already in use'
                })

            }
        }

        let hashedPassword = await bcrypt.hash(ruserpass, 8);
        console.log(hashedPassword);

        connection.query("insert into loginuser(user_name,user_pass) values(? , ?)", [rusername, hashedPassword], async function (error, results, fields) {
            if (err) {
                console.log(err);
            } else {
                return res.render("student", {
                    message: 'User registered'
                });
            }
        })
    })
}


exports.studentlogin = async function (req, res) {
    try {
        var susername = req.body.susername;
        var suserpass = req.body.suserpass;
        if (!susername || !suserpass) {
            return res.status(400).render("student",{
                message: "Please Provide an email and password"
            })
        }
        connection.query('SELECT * from loginuser WHERE user_name = ?', [susername], async (err, results) => {
            console.log(results[0]);
            if (!results || !results.length || !await bcrypt.compare(suserpass, results[0].user_pass)) {
                return res.status(401).render("student",{
                    message: 'Email or Password is incorrect'});

            } else {
                return res.status(200).render("dashboard",{
                    message: "Student logged in"});
            }
        })
    } catch (err) {
        console.log(err);
    }
}