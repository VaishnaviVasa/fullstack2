import { useRef, useState, useEffect } from "react";

function Reg() {
    const first = useRef(null);
    const sec = useRef(null);
    const email = useRef(null);
    const branch = useRef(null);
    const year = useRef(null);
    const [msg, setMsg] = useState("");
    const [collegeId, setCollegeId] = useState('');
    const [password, setPassword] = useState('');
    const [emailValue, setEmail] = useState('');
    const [branchValue, setBranch] = useState('');
    const [yearValue, setYear] = useState('');
    const [gender, setGender] = useState('');

    const handleCollegeIdChange = (event) => {
        setCollegeId(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleBranchChange = (event) => {
        setBranch(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    useEffect(() => {
        first.current.focus();
    }, []);

    const sub = (event) => {
        event.preventDefault(); // prevent reload
        console.log(collegeId);
        console.log(password);
        console.log(emailValue);
        console.log(branchValue);
        console.log(yearValue);
        console.log(gender);

        // Reset input values
        setCollegeId('');
        setPassword('');
        setEmail('');
        setBranch('');
        setYear('');
        setGender('');
        setMsg("Successfully submitted");
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: '500px', padding: '20px' }}>
                <h2>Register</h2>
                <p>Provide your details to login</p>
                <form onSubmit={sub}>
                    <h5>College id</h5>
                    <input
                        type="text"
                        placeholder="Enter college id"
                        value={collegeId}
                        onChange={handleCollegeIdChange}
                        ref={first}
                    /><br />
                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                        ref={sec}
                    />
                    <h5>Email address</h5>
                    <input
                        type="email"
                        placeholder="Enter email id"
                        value={emailValue}
                        onChange={handleEmailChange}
                        ref={email}
                    />
                    <h5>Branch</h5>
                    <select
                        value={branchValue}
                        onChange={handleBranchChange}
                        ref={branch}
                    >
                        <option>Select the branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                    </select>
                    <h5>Year</h5>
                    <select
                        value={yearValue}
                        onChange={handleYearChange}
                        ref={year}
                    >
                        <option>Select the year</option>
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                    </select>
                    <h5>Gender</h5>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleGenderChange}
                        checked={gender === 'Male'}
                        className="m-1"
                    />Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleGenderChange}
                        checked={gender === 'Female'}
                        className="m-1"
                    />Female
                    
                    <button type="submit" className="m-3 btn btn-success" style={{ display: "flex", flexDirection: "row" }}>
                        Submit
                    </button>
                </form>
                {msg}
            </div>
        </div>
    );
}
export default Reg;
