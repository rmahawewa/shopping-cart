import { useOutletContext } from "react-router-dom";

function Checkout(){
    const { data, addToCartClick } = useOutletContext();

    const filteredData = data ? data.filter(d => d.quantity > 0 && d.addToCart) : [];

    const total = filteredData.reduce((accumulator, d) => {
        return accumulator + (d.quantity * d.price);
    }, 0);

    return (
        <div>
            {filteredData.map((d) => (
                <div key={d.id}>
                    <div><label>Item</label><label>{d.title}</label></div>
                    <div><label>Quantity</label><label>{d.quantity}</label></div>
                    <div><label>Price</label><label>{d.quantity * d.price}</label></div>
                    <div><button onClick={() => addToCartClick(d.id, "remove")}>Remove</button></div>
                </div>
            ))}
            <div><label>Total Price</label><label>{total}</label></div>
            <div><button>Checkout</button></div>
        </div>
    );

}

export default Checkout;