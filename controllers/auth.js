const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.query("create table if not exists admin(user_id int not null primary key auto_increment,user_name varchar(255),user_pass varchar(255));");

connection.query("create table if not exists payment(p_name varchar(255),p_email varchar(255),p_amt varchar(255),p_branch varchar(255));");

connection.query("create table if not exists loginuser(user_id int not null primary key auto_increment,user_name varchar(255),user_pass varchar(255));");

connection.query("create table if not exists student(s_id int not null primary key auto_increment,student_name varchar(255),dob varchar(255),fathername varchar(255),mobileno varchar(255),gender varchar(255),email varchar(255),id_type varchar(255),id_no varchar(255),faculty varchar(255),dept varchar(255),issue varchar(255),expiry varchar(255),address_type varchar(255),nationality varchar(255),state varchar(255),district varchar(255),blk_no varchar(255),ward_no varchar(255));");

connection.query("create table if not exists chat(c_id int not null primary key auto_increment,chat_message varchar(255),likes varchar(255));");


exports.adlogin = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from admin where user_name = ? and user_pass = ?", [username, password], function (error, results, fields) {
        if (results.length > 0) {

            return res.render("admin-dashboard", {
                message: 'admin logged in'
            });
        } else {

            req.flash('error', 'Email or password is incorrect!');
            return res.redirect("/login");
        }
        res.end();
    })
}

exports.studentregs = async function (req, res) {
    var rusername = req.body.rusername;
    var ruserpass = req.body.ruserpass;
    connection.query('SELECT user_name from loginuser WHERE user_name = ?', [rusername], async (err, results) => {
        if (err) {
            console.log(err);
        } else {
            if (results.length > 0) {
                req.flash('error', 'The email is already in use!');
                return res.redirect("/student");
            }
        }

        let hashedPassword = await bcrypt.hash(ruserpass, 8);
        console.log(hashedPassword);

        connection.query("insert into loginuser(user_name,user_pass) values(? , ?)", [rusername, hashedPassword], async function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                req.flash('success', 'User Registered!');
                return res.redirect("/student");
            }
        })
    })
}

exports.studentlogin = async function (req, res) {
    try {
        var susername = req.body.susername;
        var suserpass = req.body.suserpass;
        if (!susername || !suserpass) {
            req.flash('error', 'Please Provide an email or password!');
            return res.redirect("/student");
        }
        connection.query('SELECT * from loginuser WHERE user_name = ?', [susername], async (err, results) => {
            console.log(results[0]);
            if (!results || !results.length || !await bcrypt.compare(suserpass, results[0].user_pass)) {
                req.flash('error', 'Email or password is incorrect!');
                return res.redirect("/student");

            } else {
                connection.query('SELECT * from student WHERE email = ?', [susername], async (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result);
                        return res.render("dashboard", {
                            data1: result
                        });
                    }
                });
            }
        })
    } catch (err) {
        console.log(err);
    }
}

exports.registration = async function (req, res) {
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


    connection.query('SELECT * from student WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            if (results.length > 0) {
                return res.redirect("/dashboard")
            }
        }


        connection.query("insert into student(student_name,dob,fathername,mobileno,gender,email,id_type,id_no,faculty,dept,issue,expiry,address_type,nationality,state,district,blk_no,ward_no) values(? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?)", [stud_name, dob, father_name, mob_no, gen, email, id_type, id_no, faculty, dept, issuse, expiry, add_type, nationality, state, district, blockno, ward], async function (error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                return res.redirect("/dashboard");
            }
        })
    })
}

exports.input = async function (req, res) {
    var chat = req.body.chat;
    connection.query("insert into chat(chat_message) values( ? )", [chat], async function (error, results, fields) {
        if (error) {
            console.log(error);

        } else {
            return res.redirect("/dashboard");
        }
    })
}

exports.chat = async function (req, res) {
    connection.query('SELECT * from chat ORDER BY c_id DESC', async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                console.log(result);
                return res.render("chats", { data: result });
            }
        }
    })
}



exports.payment = async function (req, res) {
    var p_name = req.body.p_name;
    var p_email = req.body.p_email;
    var p_amt = req.body.p_amt;
    var p_branch = req.body.p_branch;

    connection.query("insert into payment(p_name,p_email,p_amt,p_branch) values(? , ? , ? , ?)", [p_name, p_email, p_amt, p_branch], async function (error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            return res.redirect("/dashboard");
        }
    })

}
