const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const port = 5000;

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

app.get("/", (req, res) => {
  res.send("<h1>Active</h1>");
});

////////////////////////GET////////////////////////

app.get("/login", (req, res) => {
  var { email, username, password } = req.query;
  var data = {
    username: username,
    email: email,
    password: password
  };
  const sql = `SELECT *  FROM userdata WHERE Email LIKE '%${email}%' AND Password LIKE '%${password}%';`;

  conn.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
    console.log(result);
  });
});

app.get("/articles", (req, res) => {
  const sql = `SELECT * FROM articles`;

  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/products", (req, res) => {
  const sql = `SELECT * FROM productlist p
                JOIN artist a ON p.Artist = a.idArtist
                JOIN category c ON  p.Category = c.idCategory`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.get("/filtertshirt", (req, res) => {
  const sql = `SELECT * FROM productlist p
                JOIN artist a ON p.Artist = a.idArtist
                JOIN category c ON p.Category = c.idCategory
                WHERE c.Category LIKE '%CD%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/filtercd", (req, res) => {
  const sql = `SELECT * FROM productlist p
              JOIN artist a ON p.Artist = a.idArtist
              JOIN category c ON p.Category = c.idCategory
              WHERE c.Category LIKE '%CD%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/filtervinyl", (req, res) => {
  const sql = `SELECT * FROM productlist p
              JOIN artist a ON p.Artist = a.idArtist
              JOIN category c ON p.Category = c.idCategory
              WHERE c.Category LIKE '%Vinyl%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

////////////////////////POST////////////////////////

app.post("/register", (req, res) => {
  const userdata = {
    username: req.body.username,
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
