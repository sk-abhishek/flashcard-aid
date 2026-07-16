import { FaArrowRightArrowLeft } from "react-icons/fa6";

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