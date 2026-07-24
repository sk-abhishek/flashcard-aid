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
            role="button"
            tabIndex={0}
            aria-label="Show or hide hint"
            onClick={() => setShowHint(!showHint)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    setShowHint(!showHint);
                }
            }}
            
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