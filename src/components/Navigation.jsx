import {
    FaArrowLeft,
    FaArrowRight,
    FaShuffle
} from "react-icons/fa6"

function Navigation({
    currentCard,
    setCurrentCard,
    totalCards,
    setFlipped
})
{
    return(
        <div className="navigation">

            <button
                onClick={() => {
                    if (currentCard > 0) {
                        setCurrentCard(currentCard - 1);
                        setFlipped(false);
                    }
                }}
            >
                <FaArrowLeft />
                {" "}
                Previous
            </button>

            <button className="shuffle">
                <FaShuffle />
                {" "}
                Shuffle
            </button>

            <button
                onClick={() => {
                    if (currentCard < totalCards - 1) {
                        setCurrentCard(currentCard + 1);
                        setFlipped(false);
                    }
                }}

            >
                <FaArrowRight />
                {" "}
                Next
            </button>
        </div>
    );
}

export default Navigation;