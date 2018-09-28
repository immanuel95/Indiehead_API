const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const port = 5000;
const url = bodyParser.urlencoded({ extended: false });

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Immanuel^95",
  database: "indiehead",
  port: 3306
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/login", (req, res) => {
  const sql = `SELECT * FROM userdata`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.post("/register", (req, res) => {
  const userdata = {
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password
  };
  const sql = `INSERT INTO userdata SET ?`;

  conn.query(sql, userdata, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(userdata);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
