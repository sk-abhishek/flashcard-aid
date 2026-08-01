import { useState } from "react";

function AddFlashcard({ setFlashcards }) {

    const [term, setTerm] = useState("");
    const [definition, setDefinition] = useState("");

    const handleSubmit = () => {

        if (!term || !definition) {
            alert("Please fill in both fields!")
            return;
        }

        const newFlashcard = {
            term: term,
            definition: definition
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
                data
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