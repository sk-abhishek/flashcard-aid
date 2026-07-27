const express = require("express");
const flashcards = require("./data/flashcards");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/flashcards", (req, res) => {

    const newFlashcard = req.body;

    flashcards.push(newFlashcard);

    res.status(201).json({
        message: "Flashcard added successfully",
        flashcard: newFlashcard
    });
}) 