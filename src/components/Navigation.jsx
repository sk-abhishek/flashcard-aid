import {
    FaArrowLeft,
    FaArrowRight,
    FaShuffle
} from "react-icons/fa6"

function Navigation({
    currentCard,
    setCurrentCard,
    totalCards,
    setFlipped,
    flashcards,
    setShowHint
})
{
    return(
        <div className="navigation">

            <button
                onClick={() => {
                    if (currentCard > 0) {
                        setCurrentCard(currentCard - 1);
                        setFlipped(false);
                        setShowHint(false);
                    }
                }}
            >
                <FaArrowLeft />
                {" "}
                Previous
            </button>

            <button 
            className="shuffle"
            onClick={() => {
                let randomCard;
                do {
                    randomCard = Math.floor(Math.random() * flashcards.length);
                } while (randomCard === currentCard);

                setCurrentCard(randomCard);
                setFlipped(false);
                setShowHint(false)
            }}
            
            >
                <FaShuffle />
                {" "}
                Shuffle
            </button>

            <button
                onClick={() => {
                    if (currentCard < totalCards - 1) {
                        setCurrentCard(currentCard + 1);
                        setFlipped(false);
                        setShowHint(false);
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