function Card({
    id,
    title,
    image,
    quantity,
    addToCart,
    imageClick,
    handleQuantityChange,
    addToCartClick
}){
    return (
        <div key={id}>
            <img 
                key={id}
                src={image}
                alt={title}                
                onClick={() => imageClick(id)}
            />
            <div>
                <div><label>Quantity: </label><input type="number" value={quantity} onChange={(e) => handleQuantityChange(id, e)} /></div>
                <div>
                    <button onClick={() => addToCartClick(id, addToCart ? "remove" : "add")}>{addToCart ? "Remove from cart" : "Add to cart"}</button>                    
                </div>
            </div>
        </div>
    );
}

export default Card;