/**
 * Renders a button that deletes the currently selected flashcard.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.flashcard - The flashcard to delete.
 * @param {Function} props.setFlashcards - Updates the flashcards state after deletion.
 * @param {Function} props.setCurrentCard - Resets the current flashcard index.
 * @returns {JSX.Element} A button that deletes a flashcard.
 */

function DeleteButton({ flashcard, setFlashcards, setCurrentCard}) {

        /**
     * Deletes the selected flashcard from the backend API.
     *
     * Removes the flashcard from the React state and resets
     * the current card index after a successful deletion.
     *
     * @returns {void}
     */
    const handleDelete = () => {
        fetch(`http://localhost:3001/flashcards/${flashcard.id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(() => {

            setFlashcards(prev =>
                prev.filter(card => card.id !== flashcard.id)
            );

            setCurrentCard(0);
        })
        .catch(error => {
            console.error("Delete error:", error);
        });
    };

    return (
        <button 
            style={{
                background: "red",
                color: "white",
                padding: "15px",
                margin: "20px",
                borderRadius: "10px"
            }}
            onClick={handleDelete}
        >
            Delete Flashcard
        </button>
    );
}

export default DeleteButton;