import { FaArrowRightArrowLeft } from "react-icons/fa6";

/**
 * Displays the current flashcard.
 *
 * Shows either the term or definition depending on the
 * current flip state, along with the flashcard category.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.flipped - Indicates whether the flashcard is flipped.
 * @param {Object} props.flashcard - The flashcard to display.
 * @returns {JSX.Element} The flashcard interface.
 */
function Flashcard({ flipped, flashcard }) 
{
    return (
        <section className="flashcard">
            <div className="card-top">

                <span className="category">
                    {flashcard.category}
                </span>

                <span className="card-type">
                    {flipped ? "Definition" : "Term"}
                </span>
            </div>

            <div className="card-body">
                <h1>
                    {flipped
                    ? flashcard.definition
                    : flashcard.term}
                </h1>

                <button className="flip-link">
                    <FaArrowRightArrowLeft />
                    {" "}
                    Click to Flip
                </button>

            </div>
        </section>

    );

}

export default Flashcard;