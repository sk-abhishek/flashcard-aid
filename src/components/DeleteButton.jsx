function DeleteButton({ flashcard, setFlashcards, setCurrentCard}) {

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
        <button onClick={handleDelete}>
            Delete Flashcard
        </button>
    );
}

export default DeleteButton;