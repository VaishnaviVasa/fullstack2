import samsung from "./samsung.png"
import star from "./star.png"
import whish from "./whish.png"
function Ecommerce(){
    const cardData = [
        { id: 1, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 2, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 3, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 4, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 5, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 6, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 7, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
        { id: 8, imgSrc: samsung, title: "Samsung Galaxy S23 Ultra", price: "83,700" },
    ];
    return (
        <div>
           <h4>Product list</h4>
           <div style={{display:'flex',flexWrap:'wrap',gap:'30px'}}>
           {cardData.map((card) => (
                    <div key={card.id} className="card" style={{
                        position: 'relative',
                        width: '300px',
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}>
                <img src={samsung} width="100" />
                <h5>Samsung Galaxy S23 Ultra</h5>
                <img src={star} width="100"/>
                <h5>83,700</h5>
                <button class="btn btn-warning">Add to cart</button>
                <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                    }}>
                <img src={whish} width="40"/>
                </div>
                </div>
           ))}
           </div>
        </div>
    );
}
export default Ecommerce;