const express = require("express");
const flashcards = require("./data/flashcards");

const cors = require("cors");

/**
 * Express application for the Flashcard Aid backend.
 *
 * Provides REST API endpoints for creating, reading,
 * updating, and deleting flashcards.
 *
 * @module server
 */
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

/**
 * Checks that the backend server is running.
 *
 * @route GET /
 * @returns {string} Server status message.
 */
app.get("/", (req, res) => {
    res.send("Flashcard Aid Backend is Running");
});

/**
 * Retrieves all flashcards.
 *
 * @route GET /flashcards
 * @returns {Array<Object>} List of flashcards.
 */
app.get("/flashcards", (req, res) => {
    res.json(flashcards);
})

/**
 * Deletes a flashcard by its ID.
 *
 * @route DELETE /flashcards/:id
 * @param {number} id - The ID of the flashcard to delete.
 * @returns {Object} Confirmation message.
 */
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

/**
 * Updates an existing flashcard.
 *
 * @route PUT /flashcards/:id
 * @param {number} id - The ID of the flashcard to update.
 * @returns {Object} Updated flashcard data.
 */
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

/**
 * Creates a new flashcard.
 *
 * Generates a unique ID and stores the new flashcard.
 *
 * @route POST /flashcards
 * @returns {Object} Newly created flashcard.
 */
app.post("/flashcards", (req, res) => {

    const newFlashcard = {
        id: Date.now(),
        ...req.body
    };

    flashcards.push(newFlashcard);

    res.status(201).json({
        message: "Flashcard added successfully",
        flashcard: newFlashcard
    });
}) 

/**
 * Starts the Express server.
 *
 * @listens PORT
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
