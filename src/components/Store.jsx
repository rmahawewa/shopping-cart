import { useOutletContext } from "react-router-dom";
import Card from "./Card";
import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`
    // display:grid;
    // grid-template-columns: 1fr 3fr;
    display: flex;
    @media (width <= 20em) {
        flex-direction: column;
        gap: 3rem;
    }
    @media (max-width: 767px){ /* for phones */
        flex-direction: column;
        gap: 3rem;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        flex-direction: column;
        gap: 3rem;
    }
        gap: 3rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const SelectDiv = styled.div`
    // display: flex;
    // gap: 1rem;
`;

const Select = styled.select`
    width: 10rem;
    height: 3rem;
    padding: 0.5rem;
    font-size: medium;
    background-color: #ffb975;
    border: none;
    border-radius: 0.5rem;
`;

function Store(){
    const { data, category, imageClick, handleQuantityChange, addToCartClick, handleSelectChange } = useOutletContext();

    return (
        <>  
            <StoreContainer>
                <SelectDiv>
                    <label>Category {' '}</label>
                    <Select value={category} onChange={handleSelectChange}>
                        <option value="All">All</option>
                        <option value="men's clothing">Men's clothing</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewellery</option>
                    </Select>
                </SelectDiv>
                {category.localeCompare("All") == 0 ? (
                    <CardContainer>
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
                    </CardContainer>
                    ) : (
                    <CardContainer>
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
                    </CardContainer>
                )}
            </StoreContainer>
            
        </>

        
    );

    

}

export default Store;