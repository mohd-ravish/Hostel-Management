const mysql = require("mysql");
const express = require("express");
const { query } = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
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
connection.query("create table if not exists loginuser(user_id int not null primary key auto_increment,user_name varchar(255),user_pass varchar(255));");

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

app.post("/studentlogin", encoder, async function (req, res) {
    try {
        var susername = req.body.susername;
        var suserpass = req.body.suserpass;
        if (!susername || !suserpass) {
            res.redirect("/student");

            return;

        }
        connection.query('SELECT * from loginuser WHERE user_name = ?', [susername], async (err, results) => {
            console.log(results[0]);
            if (!results || !await bcrypt.compare(suserpass, results[0].user_pass)) {
                res.redirect("/student");
                return;

            } else {
                res.redirect("/dashboard");
                return;
            }
        })
    } catch (err) {
        console.log(err);
    }
})

app.post("/studentregs", encoder, async function (req, res) {
    // const { name, susername, password, passwordConfirm } = req.body;
    var rusername = req.body.rusername;
    var ruserpass = req.body.ruserpass;
    connection.query('SELECT user_name from loginuser WHERE user_name = ?', [rusername], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                res.redirect("/student");
                return;

            }
        }

        let hashedPassword = await bcrypt.hash(ruserpass, 8);
        console.log(hashedPassword);

        connection.query("insert into loginuser(user_name,user_pass) values(? , ?)", [rusername, hashedPassword], async function (error, results, fields) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/student");
            }
        })
    })
})





app.listen(4500);
