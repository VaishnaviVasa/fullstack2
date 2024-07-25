import { useState } from "react";

function Ten()
{
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplay]=useState([]);
    //arrow function
    const inputValueChange=(event)=>
    {
        setReview(event.target.value)
    }
    const addReview=()=>{
        if (review) { 
            setDisplay([reviewToDisplay, review]);
            setReview(''); 
        }
        console.log("Adding a review...");
    }
    return (
        <div className="container">
            <input type="text" placeholder="Enter a review" onChange={inputValueChange}/>
            <button type="button" class="btn btn-success btn-sm" onClick={addReview}>Add review</button>
        </div>

    );
}
export default Ten;