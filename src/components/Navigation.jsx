import {
    FaArrowLeft,
    FaArrowRight,
    FaShuffle
} from "react-icons/fa6"

/**
 * Displays navigation controls for moving between flashcards.
 *
 * Allows the user to move to the previous card, next card,
 * or randomly shuffle to another flashcard. Navigation also
 * resets the flip and hint states.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.currentCard - Index of the current flashcard.
 * @param {Function} props.setCurrentCard - Updates the current flashcard index.
 * @param {number} props.totalCards - Total number of flashcards.
 * @param {Function} props.setFlipped - Resets the flipped state.
 * @param {Array<Object>} props.flashcards - Array of flashcards.
 * @param {Function} props.setShowHint - Resets the hint visibility.
 * @returns {JSX.Element} Navigation controls.
 */
function Navigation({
    currentCard,
    setCurrentCard,
    totalCards,
    setFlipped,
    flashcards,
    setShowHint
})
{
    return(
        <div className="navigation">

            <button
                onClick={() => {
                    if (currentCard > 0) {
                        setCurrentCard(currentCard - 1);
                        setFlipped(false);
                        setShowHint(false);
                    }
                }}
            >
                <FaArrowLeft />
                {" "}
                Previous
            </button>

            <button 
            className="shuffle"
            onClick={() => {
                let randomCard;
                do {
                    randomCard = Math.floor(Math.random() * flashcards.length);
                } while (randomCard === currentCard);

                setCurrentCard(randomCard);
                setFlipped(false);
                setShowHint(false)
            }}
            
            >
                <FaShuffle />
                {" "}
                Shuffle
            </button>

            <button
                onClick={() => {
                    if (currentCard < totalCards - 1) {
                        setCurrentCard(currentCard + 1);
                        setFlipped(false);
                        setShowHint(false);
                    }
                }}

            >
                <FaArrowRight />
                {" "}
                Next
            </button>
        </div>
    );
}

export default Navigation;