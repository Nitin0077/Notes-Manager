const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "notesdb"
});

db.connect((err) => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});


/* CREATE NOTE POST /notes */

app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  const sql =
    "INSERT INTO notes(title, content) VALUES (?, ?)";

  db.query(sql, [title, content], (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(201).json({
      message: "Note created",
      id: result.insertId
    });
  });
});


/*  GET ALL NOTES */
app.get("/notes", (req, res) => {
  const sql = "SELECT * FROM notes";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);

    res.json(results);
  });
});


/* GET NOTE BY ID */

app.get("/notes/:id", (req, res) => {
  const { id } = req.params;

  const sql =
    "SELECT * FROM notes WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).send(err);

    if (results.length === 0) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json(results[0]);
  });
});


/*UPDATE NOTE */
app.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const sql =
    "UPDATE notes SET title=?, content=? WHERE id=?";

  db.query(sql, [title, content, id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json({
      message: "Note updated"
    });
  });
});


/* DELETE NOTE */
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM notes WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Note not found"
      });
    }

    res.json({
      message: "Note deleted"
    });
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});