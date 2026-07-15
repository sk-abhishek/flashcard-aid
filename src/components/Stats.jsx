import {
    FaCheck,
    FaXmark,
    FaChartColumn,
    FaFire,
} from "react-icons/fa6";

function Stats()
{
    return(
        <section className="stats">

            <div className="stat">
                <FaCheck />
                <h2>0</h2>
                <p>Correct Answer</p>
            </div>

            <div className="stat">
                <FaXmark />
                <h2>0</h2>
                <p>Incorrect Answers</p>
            </div>

            <div className="stat">
                <FaChartColumn />
                <h2>0%</h2>
                <p>Accuracy</p>
            </div>

            <div className="stat">
                <FaFire />
                <h2>0</h2>
                <p>Current Streak</p>
            </div>

        </section>
    );
}

export default Stats;