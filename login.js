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

connection.query("create table if not exists admin(user_id int not null primary key auto_increment,user_name varchar(255),user_pass varchar(255));");

connection.query("create table if not exists loginuser(user_id int not null primary key auto_increment,user_name varchar(255),user_pass varchar(255));");

connection.query("create table if not exists student(s_id int not null primary key auto_increment,student_name varchar(255),dob varchar(255),fathername varchar(255),mobileno varchar(255),gender varchar(255),email varchar(255),id_type varchar(255),id_no varchar(255),faculty varchar(255),dept varchar(255),issue varchar(255),expiry varchar(255),address_type varchar(255),nationality varchar(255),state varchar(255),district varchar(255),blk_no varchar(255),ward_no varchar(255));");

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
    connection.query("select * from admin where user_name = ? and user_pass = ?", [username, password], function (error, results, fields) {
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
            if (error) {
                console.log(err);
            } else {
                res.redirect("/student");
            }
        })
    })
})


app.post("/regstration", encoder, async function (req, res) {
    // const { name, susername, password, passwordConfirm } = req.body;
    var stud_name = req.body.stud_name;
    var dob = req.body.dob;
    var father_name = req.body.father_name;
    var mob_no = req.body.mob_no;
    var gen = req.body.gen;
    var email = req.body.email;
    var id_type = req.body.id_type;
    var id_no = req.body.id_no;
    var faculty = req.body.faculty;
    var dept = req.body.dept;
    var issuse = req.body.issuse;
    var expiry = req.body.expiry;
    var add_type = req.body.add_type;
    var nationality = req.body.nationality;
    var state = req.body.state;
    var district = req.body.district;
    var blockno = req.body.blockno;
    var ward = req.body.ward;


    connection.query('SELECT student_name from student WHERE student_name = ?', [stud_name], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                res.redirect("/dashboard");
                return;

            }
        }


        connection.query("insert into student(student_name,dob,fathername,mobileno,gender,email,id_type,id_no,faculty,dept,issue,expiry,address_type,nationality,state,district,blk_no,ward_no) values(? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)", [stud_name, dob, father_name, mob_no, gen, email, id_type, id_no, faculty, dept, issuse, expiry, add_type, nationality, state, district, blockno, ward], async function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                res.redirect("/student");
            }
        })
    })
})





app.listen(4500);
