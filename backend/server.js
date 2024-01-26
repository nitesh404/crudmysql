import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.get("/read/:id", (req, res) => {
  const sql = "SELECT * FROM student WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.post("/student", (req, res) => {
  const sql = "INSERT INTO student (`name`,`email`,`address`) VALUES (?)";
  const Values = [req.body.name, req.body.email, req.body.address];
  db.query(sql, [Values], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json({ Message: "Student added successfully" });
  });
});
app.put("/edit/:id", (req, res) => {
  const sql =
    "UPDATE student SET `name` = ?, `email` = ?, `address` = ? WHERE id = ?";
  const id = req.params.id;
  db.query(
    sql,
    [req.body.name, req.body.email, req.body.address, id],
    (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json({ Message: "Student updated successfully" });
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE id = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Message: "Error inside server" });
    return res.json(result);
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8081");
});
