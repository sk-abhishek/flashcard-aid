import { FaArrowRightArrowLeft } from "react-icons/fa6";

function Flashcard({ flipped }) 
{
    return (
        <section className="flashcard">
            <div className="card-top">

                <span className="category">
                    Networking
                </span>

                <span className="card-type">
                    Term
                </span>
            </div>

            <div className="card-body">
                <h1>
                    {flipped
                    ? "Transmission Control Protocol / Internet Protocol"
                    : TCP/IP}
                </h1>

                <button className="flip-link">
                    <FaArrowRightArrowLeft />
                    Click to Flip
                </button>

            </div>
        </section>

    );

}

export default Flashcard;