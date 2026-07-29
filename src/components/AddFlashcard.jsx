import { useState } from "react";

function AddFlashcard({ setFlashcards }) {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSubmit = () => {

        if (!question || !answer) {
            alert("Please fill in both fields!")
            return;
        }

        const newFlashcard = {
            question: question,
            answer: answer
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
            setQuestion("");
            setAnswer("");

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
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />

            <input
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Save Flashcard
            </button>

        </div>
    );
}

export default AddFlashcard;