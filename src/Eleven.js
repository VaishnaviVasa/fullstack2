import { useRef } from "react";

function Eleven()
{
    const firstRef=useRef(null);//reference
    const fromSubmitted = (event)=>{
        event.preventDefault();//prevent reload
        console.log("form submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';//clear value in the input
    };
   
    return (
        <div>
            <form onSubmit={fromSubmitted}>
                <input type="text" placeholder="Enter a value" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Eleven;