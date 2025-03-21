import { useOutletContext } from "react-router-dom";

function SingleView(){
    const { selectedItem, handleQuantityChange, addToCartClick } = useOutletContext();

    return (
        <div key={selectedItem.id}>
            <img 
                key={selectedItem.id}
                src={selectedItem.image}
                alt={selectedItem.title}
            />
            <div>
                <div><label>{selectedItem.title}</label></div>
                <div><label>{selectedItem.description}</label></div>
                <div><label>Category: {selectedItem.category}</label></div>
                <div>
                    <div><label>Quantity: </label><input type="number" value={selectedItem.quantity} onChange={(e) => handleQuantityChange(selectedItem.id, e)} /></div>
                    <div><button onClick={() => addToCartClick(selectedItem.id, selectedItem.addToCart ? "remove" : "add")}>{selectedItem.addToCart ? "Remove from cart" : "Add to cart"}</button></div>
                </div>
            </div>
        </div>
    );
}

export default SingleView;