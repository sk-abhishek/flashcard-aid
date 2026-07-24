import { FaUpDown } from "react-icons/fa6";

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