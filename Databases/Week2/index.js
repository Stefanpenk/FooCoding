const express = require("express");
const mysql = require("mysql2");
const env = require("dotenv").config();

const PORT = process.env.PORT || 8080;
const passwordArg = process.env.DB_PASSWORD;
const app = express();

app.listen(PORT, () => console.log(`API is running on ${PORT}`));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: passwordArg,
  database: "new_world",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
});

app.get("/countrycapital/:country", (req, res) => {
  db.execute(
    "SELECT country.Name AS Country, city.Name AS Capital FROM city INNER JOIN country ON capital = city.ID WHERE country.Name = ?",
    [req.params.country],
    function (err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );
});

app.get("/regionlanguages/:country", (req, res) => {
  db.execute(
    "SELECT Language, Name FROM countrylanguage l INNER JOIN country c ON c.Code = l.CountryCode WHERE c.name = ?",
    [req.params.country],
    function (err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );
});

app.get("/citieslanguagenumber/:language", (req, res) => {
  db.execute(
    "SELECT count(c.Name) AS Cities FROM city c INNER JOIN countrylanguage l ON c.CountryCode = l.CountryCode WHERE l.Language = ?",
    [req.params.language],
    function (err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );
});

app.get("/continentslistlanguagesnumber", (req, res) => {
  db.execute(
    "SELECT c.Continent, count(l.Language) AS Languages FROM country c INNER JOIN countrylanguage l ON c.Code = l.CountryCode GROUP BY c.Continent",
    [],
    function (err, results, fields) {
      console.log(results);
      res.send(results);
    }
  );
});
