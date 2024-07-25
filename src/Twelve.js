import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
function Twelve() {
    const [display, setDisplay] = useState(false);
    const [register,setRegister]=useState(false);
    const handleButtonClick = () => {
        setDisplay(true);
        setRegister(false);
    };
    const handleRegister=()=>{
        setRegister(true);
        setDisplay(false);
    };
    return (
        <div>
            <button onClick={handleButtonClick}>Login</button>
            <button onClick={handleRegister}>Register</button>
            {display && <Login />}
            {register && <Register/>}
        </div>
    );
}

export default Twelve;
