import { useState } from "react";
import samsung from "./samsung.png";
function Product(){
    const [review, setReview] = useState('');
    const [reviewToDisplay, setDisplay] = useState([]);

    const inputValueChange = (event) => {
        setReview(event.target.value);
    };

    const addReview = () => {
        if (review) { 
            setDisplay([reviewToDisplay, review]);
            setReview(''); 
        }
    };
    return(
        <div class="card">
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Type here to search"
                    style={{ padding: "10px", fontSize: "16px", width: "40%" ,borderRadius:10}}
                />
                <button type="button" class="btn btn-dark" style={{ padding: "10px", fontSize: "16px", width: "5%" ,borderRadius:10}}>Search</button>
            </div>
            <h1>Samsung Galaxy</h1>
            <div  style={{display:"flex",borderColor:'#ded1dd',borderWidth:'10px solid #ccc',borderRadius:'5px',boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'}}>
                <img src={samsung} width={300}/>
                <div style={{marginLeft: "20px"}}>
                    <h4>Samsung S23 Ultra</h4>
                    <p>
                        Welcome to the era of mobile AI. With Galaxy S23 Ultra in your hands,
                        you can unleash whole new levels of creativity, productivity and possibility — starting 
                        with the most important device in your life. Your smartphone.
                    </p><br></br><br></br><br></br><br></br><br></br>
                    <h4><b>500.00</b></h4>
                    <button type="button" class="btn btn-success">Add to cart</button>
                </div>
            </div>
            <h4>Samsung Specifications</h4>
                <p>Samsung Galaxy S23 Ultra 5G price in India starts from Rs. 82,699. The lowest price of Samsung Galaxy S23 Ultra 5G is Rs. 82,699 at amazon.in. This is 12 GB RAM / 256 GB internal storage..</p>
            <h4>Reviews</h4>
            <div style={{ display: "flex", marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Enter a review"
                    value={review}
                    onChange={inputValueChange}
                    style={{ fontSize: "16px", height: "40px", width: "70%", borderRadius: 10 }}
                />
                <button
                    type="button"
                    className="btn btn-success"
                    style={{ padding: "0px", fontSize: "16px", width: "10%", borderRadius: 10, marginLeft: "10px" }}
                    onClick={addReview}
                >
                    Add review
                </button>
            </div>
            <div style={{ marginTop: "20px" }}>
                {reviewToDisplay.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            </div>
        </div>
    );
}
export default Product;