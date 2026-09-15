import "dotenv/config";
import express from "express";
import path from "path";

const app = express();

const port = process.env.PORT || 8000;

const notes = [
  { id: 1, text: "Las Gabriella" },
  { id: 2, text: "Las Patricia" },
  { id: 3, text: "Las Nicole" },
  { id: 4, text: "Las Sofia" },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});