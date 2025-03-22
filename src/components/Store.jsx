import { useOutletContext } from "react-router-dom";
import Card from "./Card";

function Store(){
    const { data, category, imageClick, handleQuantityChange, addToCartClick, handleSelectChange } = useOutletContext();

    return (
        <>  
            <div className="store-container">
                <div className="select">
                    <label>Category</label>
                    <select value={category} onChange={handleSelectChange}>
                        <option value="All">All</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewellery</option>
                    </select>
                </div>
                {category.localeCompare("All") == 0 ? (
                    <div className="card-container">
                        {data && data.map((d) => (
                            <Card 
                                key = {d.id}
                                id = {d.id}
                                title={d.title}
                                image={d.image}
                                price={d.price}
                                quantity={d.quantity}
                                addToCart={d.addToCart}
                                imageClick={imageClick}
                                handleQuantityChange = {handleQuantityChange}
                                addToCartClick = {addToCartClick}
                            />
                        ))}
                    </div>
                    ) : (
                    <div className="card-container">
                        {data && data.map((d) => 
                            d.category.localeCompare(category) === 0 && (
                                <Card 
                                    key = {d.id}
                                    id = {d.id}
                                    title={d.title}
                                    image={d.image}
                                    price={d.price}
                                    quantity={d.quantity}
                                    addToCart={d.addToCart}
                                    imageClick={imageClick}
                                    handleQuantityChange = {handleQuantityChange}
                                    addToCartClick = {addToCartClick}
                                />
                            )
                        )}
                    </div>
                )}
            </div>
            
        </>

        
    );

    

}

export default Store;