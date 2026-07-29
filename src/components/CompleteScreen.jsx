function CompleteScreen({
    correctCount,
    incorrectCount,
    streak,
    onRestart
}) 
{
    const total = correctCount + incorrectCount;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correctCount / total) * 100);
    
    return (
        <section className="flashcard">

            <div className="card-body">

                <h1>Deck Complete!</h1>
                <p>You have finished all the flashcards.</p>
                <br />

                <p>Correct: {correctCount}</p>
                <p>Incorrect: {incorrectCount}</p>
                <p>Accuracy: {accuracy}%</p>
                <p>Best Streak: {streak}</p>

                <button
                    className="flip-button"
                    onClick={onRestart}
                    >
                        Restart Deck
                    </button>

            </div>
        </section>
    );
}

export default CompleteScreen;