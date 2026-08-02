import { FaChevronDown } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";

/**
 * Displays a collapsible hint for the current flashcard.
 *
 * Allows the user to reveal or hide the hint using
 * either the mouse or keyboard for accessibility.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.flashcard - The current flashcard containing the hint.
 * @param {boolean} props.showHint - Indicates whether the hint is visible.
 * @param {Function} props.setShowHint - Toggles the hint visibility.
 * @returns {JSX.Element} A collapsible hint section.
 */
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