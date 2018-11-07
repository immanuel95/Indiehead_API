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

// =========================== USER ATHENTICATION ===========================

app.get("/login", (req, res) => {
  var { email, username, password } = req.query;
  var data = {
    username: username,
    email: email,
    password: password
  };
  const sql = `SELECT * FROM userdata WHERE Email LIKE '%${email}%' AND Password LIKE '%${password}%';`;

  conn.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/keepLogin", (req, res) => {
  var { email } = req.query;
  var data = {
    email: email
  };
  const sql = `SELECT * FROM userdata WHERE Email LIKE '%${email}%';`;

  conn.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

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

// =========================== PRODUCTS ===========================

app.get("/filterartist/:name", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
                FROM productlist p
                JOIN artist a ON p.Artist = a.idArtist
                JOIN category c ON p.Category = c.idCategory
                WHERE a.Artist LIKE '%${req.params.name}%'`;

  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/articles", (req, res) => {
  const sql = `SELECT * FROM articles`;

  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/productdetail/:id", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
                FROM productlist p
                JOIN artist a ON p.Artist = a.idArtist
                JOIN category c ON p.Category = c.idCategory
                WHERE p.idproductlist = ${req.params.id}`;

  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/artists", (req, res) => {
  const sql = `SELECT * FROM artist;`;

  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/category", (req, res) => {
  const sql = `SELECT * FROM category;`;

  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/products", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
              FROM productlist p
              JOIN artist a ON p.Artist = a.idArtist
              JOIN category c ON p.Category = c.idCategory`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.get("/filtertshirt", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
                FROM productlist p
                JOIN artist a ON p.Artist = a.idArtist
                JOIN category c ON p.Category = c.idCategory
                WHERE c.Category LIKE '%T-Shirt%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/filtercd", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
              FROM productlist p
              JOIN artist a ON p.Artist = a.idArtist
              JOIN category c ON p.Category = c.idCategory
              WHERE c.Category LIKE '%CD%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.get("/filtervinyl", (req, res) => {
  const sql = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
              FROM productlist p
              JOIN artist a ON p.Artist = a.idArtist
              JOIN category c ON p.Category = c.idCategory
              WHERE c.Category LIKE '%Vinyl%'`;
  conn.query(sql, (err, results) => {
    if (err) throw err;

    res.send(results);
  });
});

app.put("/products/:id", (req, res) => {
  const { Picture, Artist, ProductName, Category, Price } = req.body;
  const data = { Picture, Artist, ProductName, Category, Price };

  const sql = `UPDATE productlist SET ? WHERE idproductlist = ${req.params.id}`;
  conn.query(sql, data, (err, result) => {
    if (err) throw err;

    const sql1 = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
                    FROM productlist p
                    JOIN artist a ON p.Artist = a.idArtist
                    JOIN category c ON p.Category = c.idCategory`;

    conn.query(sql1, (err1, result1) => {
      if (err1) throw err1;
      res.send(result1);
    });
  });
});

app.post("/addproduct", (req, res) => {
  const { Picture, ProductName, Artist, Category, Price } = req.body;
  const data = { Picture, ProductName, Artist, Category, Price };

  const sql = `INSERT INTO productlist SET ?;`;

  conn.query(sql, data, (err, result) => {
    if (err) throw err;

    const sql1 = `SELECT p.*, a.Artist as NamaArtist, c.Category as NamaCategory 
                  FROM productlist p
                  JOIN artist a ON p.Artist = a.idArtist
                  JOIN category c ON p.Category = c.idCategory`;

    conn.query(sql1, (err1, result1) => {
      if (err1) throw err1;
      res.send(result1);
    });
  });
});

// =========================== CART ===========================

app.get("/cart/:username", (req, res) => {
  const sql = `SELECT c.*, a.Artist as NamaArtist, ct.Category as NamaCategory FROM cart c
                JOIN artist a ON c.Artist = a.idArtist
                JOIN category ct ON c.Category = ct.idCategory
                WHERE c.Username = '${req.params.username}';`;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/cart", (req, res) => {
  const {
    username,
    idproductlist,
    ProductName,
    Artist,
    Category,
    Picture,
    Price,
    amount
  } = req.body;

  const data = {
    Username: username,
    idproductlist,
    ProductName,
    Artist,
    Category,
    Picture,
    Price,
    Amount: amount
  };

  const sql = `SELECT * FROM cart WHERE Username = '${username}' AND idproductlist = ${idproductlist};`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    if (result != "") {
      const sql1 = `UPDATE cart SET Amount = Amount + ${amount} WHERE idproductlist = ${idproductlist} AND Username = '${username}';`;

      conn.query(sql1, (err1, result1) => {
        if (err1) throw err1;
        res.send(result1);
      });
    } else {
      const sql2 = `INSERT INTO cart SET ?`;

      conn.query(sql2, data, (err2, result2) => {
        if (err) throw err2;
        res.send(result2);
      });
    }
  });
});

app.delete("/cart", (req, res) => {
  const sql = `DELETE FROM cart WHERE idcart = ${req.query.id}`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    const sql1 = `SELECT c.*, a.Artist as NamaArtist, ct.Category as NamaCategory FROM cart c
                  JOIN artist a ON c.Artist = a.idArtist
                  JOIN category ct ON c.Category = ct.idCategory
                  WHERE c.Username = '${req.query.username}';`;

    conn.query(sql1, (err1, result1) => {
      if (err1) throw err1;
      res.send(result1);
    });
  });
});

// =========================== TRANSACTIONS ===========================

app.post("/checkout", (req, res) => {
  const { username, totalPrice } = req.body;
  const data = { Username: username, TotalPrice: totalPrice };

  const sql = `INSERT INTO transaction SET ?;`;

  conn.query(sql, data, (err, result) => {
    if (err) throw err;

    const sql1 = `SELECT (SELECT MAX(idtransaction) FROM transaction WHERE Username = '${username}') AS idtransaction,
                  ProductName, Picture, Price, Amount FROM cart WHERE Username = '${username}'`;

    conn.query(sql1, (err1, result1) => {
      if (err1) throw err1;

      const sql2 = `INSERT INTO transaction_detail (idtransaction, ProductName, Price, Picture, Amount) VALUES ?`;
      var values = [];
      result1.map(data => {
        values.push([
          data.idtransaction,
          data.ProductName,
          data.Price,
          data.Picture,
          data.Amount
        ]);
        conn.query(sql2, [values], (err2, result2) => {
          if (err2) throw err2;

          const sql3 = `DELETE FROM cart WHERE Username = '${username}';`;

          conn.query(sql3, (err3, result3) => {
            if (err3) throw err3;

            const sql4 = `SELECT c.*, a.Artist as NamaArtist, ct.Category as NamaCategory FROM cart c
                          JOIN artist a ON c.Artist = a.idArtist
                          JOIN category ct ON c.Category = ct.idCategory
                          WHERE c.Username = '${username}';`;

            conn.query(sql4, (err4, result4) => {
              if (err4) throw err4;

              res.send(result4);
            });
          });
        });
      });
    });
  });
});

app.post("/buynow", (req, res) => {
  const { username, totalPrice } = req.body;
  const data = { Username: username, TotalPrice: totalPrice };

  const sql = `INSERT INTO transaction SET ?;`;

  conn.query(sql, data, (err, result) => {
    if (err) throw err;

    const sql1 = `SELECT (SELECT MAX(idtransaction) FROM transaction WHERE Username = '${username}') AS idtransaction,
                  ProductName, Picture, Price, Amount FROM cart WHERE Username = '${username}'`;

    conn.query(sql1, (err1, result1) => {
      if (err1) throw err1;

      const sql2 = `INSERT INTO transaction_detail (idtransaction, ProductName, Price, Picture, Amount) VALUES ?`;
      var values = [];
      result1.map(data => {
        values.push([
          data.idtransaction,
          data.ProductName,
          data.Price,
          data.Picture,
          data.Amount
        ]);
        conn.query(sql2, [values], (err2, result2) => {
          if (err2) throw err2;
        });
      });
    });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
