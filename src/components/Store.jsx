import { useOutletContext } from "react-router-dom";
import Card from "./Card";

function Store(){
    const { data, category, imageClick, handleQuantityChange, addToCartClick } = useOutletContext();

    return (
        <>  
            <div className="store-container">
                <div className="select">

                </div>
                {category.localeCompare("All") == 0 ? (
                    <div className="card-container">
                        {data && data.map((d) => (
                            <Card 
                                key = {d.id}
                                id = {d.id}
                                title={d.title}
                                image={d.image}
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