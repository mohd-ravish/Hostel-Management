const express = require("express");
const path = require("path")
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const session = require("express-session");
const flash = require("connect-flash");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    cookie: {secure: false, maxAge: 60000},
    resave:false,
    saveUninitialized: false
}));

app.use(flash());

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})
// Define Routes
app.use('/', require('./routes/pages'));
app.use('/', require('./routes/auth'));

app.listen(4500);