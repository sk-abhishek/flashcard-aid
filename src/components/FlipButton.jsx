import { FaUpDown } from "react-icons/fa6";

/**
 * Renders a button that flips the current flashcard.
 *
 * Toggles between displaying the term and definition
 * of the active flashcard.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.flipped - Indicates whether the flashcard is flipped.
 * @param {Function} props.setFlipped - Updates the flashcard flip state.
 * @returns {JSX.Element} A button that flips the flashcard.
 */
function FlipButton({ flipped, setFlipped})
{
    return (
        <button className="flip-button"
        aria-label="Flip flashcard"
        onClick={() => setFlipped(!flipped)}
        >
            <FaUpDown />
            {" "}
            Flip Card
        </button>
    );
}

export default FlipButton;