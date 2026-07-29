import { FaCheck, FaXmark } from "react-icons/fa6";

function AnswerButtons({
    currentCard,
    setCurrentCard,
    totalCards,
    setFlipped,

    correctCount,
    setCorrectCount,

    incorrectCount,
    setIncorrectCount,

    streak,
    setStreak,
    setDeckComplete
})
{
    return (
        <div className="answer-buttons">
            <button 
                className="correct"
                aria-label="Mark answer as correct"
                onClick={() => {

                    setCorrectCount(correctCount + 1);
                    setStreak(streak + 1)

                    if (currentCard < totalCards -1)
                    {
                        setCurrentCard(currentCard + 1);
                    } else {
                        setDeckComplete(true);
                    }

                    setFlipped(false);
                }}
            >
                <FaCheck />
                {" "}
                I Knew It
            </button>

            <button 
                className="wrong"
                aria-label="Mark answer as correct"
                onClick={() => {

                    setIncorrectCount(incorrectCount + 1);
                    setStreak(0)

                    if (currentCard < totalCards - 1)
                    {
                        setCurrentCard(currentCard + 1);
                    } else {
                        setDeckComplete(false);
                    }

                    setFlipped(false);
                }}

            
            >
                <FaXmark />
                {" "}
                I Didn't Know
            </button>
        </div>

    );
}

export default AnswerButtons;