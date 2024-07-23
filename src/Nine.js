import { useEffect, useState } from "react";

function Nine()
{
    //const count=7;
    const [count,setCount]=useState(0);

    //first called it called once
    const add=()=>{
        setCount(count+1);
    };
    const sub=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    useEffect(()=>{
        console.log("Use effect is called");
    })
    return(
        <div className="d-flex justify-content-center m-3" style={{display:"flex",flexWrap:"wrap"}} >
            <button type="button" class="btn btn-danger" onClick={add}>+</button>
            <h4>{count}</h4>
            <button type="button" class="btn btn-danger" onClick={sub}>-</button>
            {count==0 && <button type="button" class="btn btn-warning" onClick={reset}>Add to Cart</button>}
            
        </div>
    );

}
export default Nine;