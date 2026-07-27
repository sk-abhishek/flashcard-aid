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

app.delete("/flashcards/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = flashcards.findIndex(
        flashcard => flashcard.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Flashcard not found"
        });
    }

    flashcards.splice(index, 1);

    res.json({
        message: "Flashcard deleted successfully"
    });

});

app.put("/flashcards/:id", (req, res) => {
    const id = Number(req.params.id);

    const flashcard = flashcards.find(
        flashcard => flashcard.id === id
    );

    if (!flashcard) {
        return res.status(404).json({
            message: "Flashcard not found"
        });
    }

    Object.assign(flashcard, req.body);

    res.json({
        message: "Flashcard updated successfully",
        flashcard
    });
});

app.post("/flashcards", (req, res) => {

    const newFlashcard = req.body;

    flashcards.push(newFlashcard);

    res.status(201).json({
        message: "Flashcard added successfully",
        flashcard: newFlashcard
    });
}) 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
