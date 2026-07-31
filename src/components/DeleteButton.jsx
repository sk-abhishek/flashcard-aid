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