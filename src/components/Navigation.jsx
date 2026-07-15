import {
    FaArrowLeft,
    FaArrowRight,
    FaShuffle
} from "react-icons/fa6"

function Navigation()
{
    return(
        <div className="navigation">

            <button>
                <FaArrowLeft />
                {" "}
                Previous
            </button>

            <button className="shuffle">
                <FaShuffle />
                {" "}
                Shuffle
            </button>

            <button>
                <FaArrowRight />
                {" "}
                Next
            </button>
        </div>
    );
}

export default Navigation;