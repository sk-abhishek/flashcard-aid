import { FaChevronDown } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";

function Hint() 
{
    return  (
        <div className="hint">
            <div> 
                <LuLightbulb />
                {" "}
            Show Hint
            </div>

            <FaChevronDown />
        </div>
    );
}

export default Hint;