import { FaUpDown } from "react-icons/fa6";

function FlipButton()
{
    return (
        <button className="flip-button">
            <FaUpDown />
            {" "}
            Flip Card
        </button>
    );
}

export default FlipButton;