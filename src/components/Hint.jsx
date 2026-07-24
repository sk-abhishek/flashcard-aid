import { FaChevronDown } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";

function Hint({
    flashcard,
    showHint,
    setShowHint
}) 
{
    return  (
        <div 
            className="hint"
            onClick={() => setShowHint(!showHint)}
            role="button"
            tabIndex={0}
            aria-label="Show or hide hint"
        >
            <div> 
                <LuLightbulb />
                {" "}
            {showHint ? "Hide Hint" : "Show Hint"}

            {showHint && (
                <p className="hint-text">
                    {flashcard.hint}
                </p>
            )}
            </div>

            <FaChevronDown 
                className={showHint ? "rotate" : ""}
            />

        </div>
    );
}

export default Hint;