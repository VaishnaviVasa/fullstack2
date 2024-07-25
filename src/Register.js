import { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const[msg,setmsg]=useState("");
    const [collegeId,setCollegeId]=useState('');
    const [password,setPassword]=useState('');
    const [emailValue,setEmail]=useState('');
    const [branchValue,setBranch]=useState('');
    const [yearValue,setYear]=useState('');
    const [genderValue,setGender]=useState('');
    const nav=useNavigate();
    const getCollegeId = (event)=>{
        setCollegeId(event.target.value);
    };
    const getPassword = (event)=>{
        setPassword(event.target.value);
    };
    const getEmail= (event)=>{
        setEmail(event.target.value);
    };
    const getBranch=(event)=>{
        setBranch(event.target.value);
    };
    const getYear=(event)=>{
        setYear(event.target.value);
    };
    const getGender=(event)=>{
        setGender(event.target.value);
    };
    const sub=(event)=>{
        event.preventDefault();//prevent reload
        if(collegeId && password && emailValue && branchValue && yearValue && genderValue)
        {
            console.log(collegeId);
            console.log(password);
            console.log(emailValue);
            console.log(branchValue);
            console.log(yearValue);
            console.log(genderValue);
    
            // Reset input values
            setCollegeId('');
            setPassword('');
            setEmail('');
            setBranch('');
            setYear('');
            setGender('');
            setmsg("Succesfully submitted");
            nav("/ecommerce");
        }   
        else{
            setmsg("Please fill the form..");
        }
    };
    return(
        <div className="d-flex justify-content-center">
            <div className="card" style={{width:'500px',padding:'20px'}}>
            <h2>Register</h2>
            <p>Provide your details to login</p>
            <form onSubmit={sub}>
                <h5>College id</h5>
                <input type="text" placeholder="college id" value={collegeId} onChange={getCollegeId}/><br></br>
                <h5>Password</h5>
                <input type="password" placeholder="Enter password" value={password} onChange={getPassword} />
                <h5>Email address</h5>
                <input type="email" placeholder="Enter email id" value={emailValue} onChange={getEmail} />
                <h5>Branch</h5>
                <select  value={branchValue} onChange={getBranch}>
                    <option>Select the branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>
                <h5>Year</h5>
                <select  value={yearValue} onChange={getYear}>
                    <option>Select the year</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="4th">4th</option>
                </select>
                <h5>Gender</h5>
                <input type="radio" name="Male" value="Male" class="m-1" onChange={getGender}/>Male
                <input type="radio" name="Male" value="Male" class="m-1" onChange={getGender}/>Female
                
                <button class="m-3 btn btn-success" style={{display:"flex",flexDirection:"row"}}>Register</button>
            </form>
            {msg}
            </div>
        </div>
    );
}
export default Register;