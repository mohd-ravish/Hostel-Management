const mysql = require("mysql");
const express = require("express");
const { query } = require("express");
// const bodyParser = require("body-parser");
const encoder = express.urlencoded();
// const path = require('path')
const app = express();

// app.use(express.static(__dirname + 'public'))

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs"
});

connection.connect(function (error) {
    if (error) throw error
    else console.log("connected")

});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.get("/student", function (req, res) {
    res.sendFile(__dirname + "/student.html");

})
app.get("/dashboard", function (req, res) {
    res.sendFile(__dirname + "/dashboard.html");
})

app.get("/login", function (req, res) {
    res.sendFile(__dirname + "/login.html");
})

app.post("/adlogin", encoder, function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    // console.log("select * from loginuser where user_name = ? and user_pass = ?", [username, password]);
    connection.query("select * from loginuser where user_name = ? and user_pass = ?", [username, password], function (error, results, fields) {
        if (results.length > 0) {
            res.redirect("/dashboard");
            console.log(results);
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

app.post("/studentlogin", encoder, function (req, res) {
    var susername = req.body.susername;
    var suserpass = req.body.suserpass;
    // console.log("select * from loginuser where user_name = ? and user_pass = ?", [username, password]);
    connection.query("select * from loginuser where user_name = ? and user_pass = ?", [susername, suserpass], function (error, results, fields) {
        if (results.length > 0) {
            res.redirect("/dashboard");
            console.log(results);
        } else {
            res.redirect("/");
        }
        res.end();
    })
})

app.post("/studentregs", encoder, function (req, res) {
    var rusername = req.body.rusername;
    var ruserpass = req.body.ruserpass;
    // console.log("select * from loginuser where user_name = ? and user_pass = ?", [username, password]);
    connection.query("insert into loginuser(user_name,user_pass) values(? , ?)", [rusername, ruserpass], function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            res.redirect("/student");
            console.log(results);
        }
        res.end();
    })
})




app.listen(4500);
