const express = require("express");
const flashcards = require("./data/flashcards");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Flashcard Aid Backend is Running");
});

app.get("/flashcards", (req, res) => {
    res.json(flashcards);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});