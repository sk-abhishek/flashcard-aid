import { FaCheck, FaXmark } from "react-icons/fa6";

function AnswerButtons()
{
    return (
        <div className="answer-buttons">
            <button className="correct">
                <FaCheck />
                {" "}
                I Knew It
            </button>

            <button className="wrong">
                <FaXmark />
                {" "}
                I Didn't Know
            </button>
        </div>

    );
}

export default AnswerButtons;