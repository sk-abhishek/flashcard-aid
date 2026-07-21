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
    setStreak
})
{
    return (
        <div className="answer-buttons">
            <button 
                className="correct"
                onClick={() => {

                    setCorrectCount(correctCount + 1);
                    setStreak(streak + 1)

                    if (currentCard < totalCards -1)
                    {
                        setCurrentCard(currentCard + 1);
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
                onClick={() => {

                    setIncorrectCount(incorrectCount + 1);
                    setStreak(0)

                    if (currentCard < totalCards - 1)
                    {
                        setCurrentCard(currentCard + 1);
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