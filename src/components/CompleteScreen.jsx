/**
 * Displays the deck completion screen and study statistics.
 *
 * Shows the user's performance, including the number of
 * correct and incorrect answers, overall accuracy, and
 * best streak. Provides an option to restart the deck.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.correctCount - Total number of correct answers.
 * @param {number} props.incorrectCount - Total number of incorrect answers.
 * @param {number} props.streak - Highest correct answer streak achieved.
 * @param {Function} props.onRestart - Resets the study session.
 * @returns {JSX.Element} The deck completion screen.
 */

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