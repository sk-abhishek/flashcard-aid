import {
    FaCheck,
    FaXmark,
    FaChartColumn,
    FaFire,
} from "react-icons/fa6";

function Stats({
    correctCount,
    incorrectCount,
    streak
}) 
{
    const totalAnswers = correctCount + incorrectCount;

    const accuracy = 
        totalAnswers === 0
            ? 0
            : Math.round((correctCount / totalAnswers) * 100);





    return(
        <section className="stats">

            <div className="stat">
                <FaCheck />
                <h2>{correctCount}</h2>
                <p>Correct Answer</p>
            </div>

            <div className="stat">
                <FaXmark />
                <h2>{incorrectCount}</h2>
                <p>Incorrect Answers</p>
            </div>

            <div className="stat">
                <FaChartColumn />
                <h2>{accuracy}%</h2>
                <p>Accuracy</p>
            </div>

            <div className="stat">
                <FaFire />
                <h2>{streak}</h2>
                <p>Current Streak</p>
            </div>

        </section>
    );
}

export default Stats;