import { useState } from "react";

/**
 * Displays a form for creating new flashcards.
 *
 * Validates user input, sends a POST request to the backend,
 * and updates the flashcard list when a new card is created.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.setFlashcards - Updates the flashcards state.
 * @returns {JSX.Element} The add flashcard form.
 */
function AddFlashcard({ setFlashcards }) {

        /**
     * Stores the user's question input.
     *
     * @type {[string, Function]}
     */
    const [term, setTerm] = useState("");

        /**
     * Stores the user's answer input.
     *
     * @type {[string, Function]}
     */
    const [definition, setDefinition] = useState("");

        /**
     * Creates a new flashcard after validating the input.
     *
     * Sends the flashcard to the backend API and updates
     * the React state when the request succeeds.
     *
     * @returns {void}
     */
    const handleSubmit = () => {

        if (!term.trim() || !definition.trim()) {
            alert("Please fill in both fields!")
            return;
        }

        const newFlashcard = {
            term: term,
            definition: definition,
            term: term.trim(),
            definition: definition.trim()
        };

        fetch("http://localhost:3001/flashcards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFlashcard),
        })
        .then(response => response.json())
        .then(data => {

            console.log("Added:", data);

            // update React state so UI updates immediately
            setFlashcards(prev => [
                ...prev,
                data.flashcard
            ]);

            // clear form
            setTerm("");
            setDefinition("");

        })
        .catch(error => {
            console.error("POST error:", error);
        });
    };


    return (
        <div className="add-flashcard">

            <h2>Add Flashcard</h2>

            <input
                placeholder="Question"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />

            <input
                placeholder="Answer"
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Save Flashcard
            </button>

        </div>
    );
}

export default AddFlashcard;