import { useState } from "react";

function Ten()
{
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplay]=useState([]);
    //arrow function
    const inputValueChange=(event)=>
    {
        console.log(event.target.value);
        setReview(event.target.value)
    }
    const addReview=()=>{

        console.log("Adding a review...");
        setDisplay(review);
    }
    return (
        <div className="container">
            <input type="text" placeholder="Enter a review" onChange={inputValueChange}/>
            <button type="button" class="btn btn-success btn-sm" onClick={addReview}>Add review</button>
        </div>

    );
}
export default Ten;