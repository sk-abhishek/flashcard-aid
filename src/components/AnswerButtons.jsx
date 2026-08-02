import { FaCheck, FaXmark } from "react-icons/fa6";

/**
 * Displays answer buttons for tracking the user's progress.
 *
 * Records whether the user knew the answer, updates the
 * correct/incorrect counts and streak, and navigates to
 * the next flashcard or completion screen.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentCard - Index of the current flashcard.
 * @param {Function} props.setCurrentCard - Updates the current flashcard index.
 * @param {number} props.totalCards - Total number of flashcards.
 * @param {Function} props.setFlipped - Resets the flashcard to its front side.
 * @param {number} props.correctCount - Current number of correct answers.
 * @param {Function} props.setCorrectCount - Updates the correct answer count.
 * @param {number} props.incorrectCount - Current number of incorrect answers.
 * @param {Function} props.setIncorrectCount - Updates the incorrect answer count.
 * @param {number} props.streak - Current correct answer streak.
 * @param {Function} props.setStreak - Updates the streak count.
 * @param {Function} props.setDeckComplete - Marks the deck as completed.
 * @returns {JSX.Element} Answer tracking controls.
 */

function AnswerButtons({
    currentCard,
    setCurrentCard,
    totalCards,
    setFlipped,

    correctCount,
    setCorrectCount,

    incorrectCount,
    setIncorrectCount,

    streak,
    setStreak,
    setDeckComplete
})
{
    return (
        <div className="answer-buttons">
            <button 
                className="correct"
                aria-label="Mark answer as correct"
                onClick={() => {

                    setCorrectCount(correctCount + 1);
                    setStreak(streak + 1)

                    if (currentCard < totalCards -1)
                    {
                        setCurrentCard(currentCard + 1);
                    } else {
                        setDeckComplete(true);
                    }

                    setFlipped(false);
                }}
            >
                <FaCheck />
                {" "}
                I Knew It
            </button>

            <button 
                className="wrong"
                aria-label="Mark answer as correct"
                onClick={() => {

                    setIncorrectCount(incorrectCount + 1);
                    setStreak(0)

                    if (currentCard < totalCards - 1)
                    {
                        setCurrentCard(currentCard + 1);
                    } else {
                        setDeckComplete(true);
                    }

                    setFlipped(false);
                }}

            
            >
                <FaXmark />
                {" "}
                I Didn't Know
            </button>
        </div>

    );
}

export default AnswerButtons;