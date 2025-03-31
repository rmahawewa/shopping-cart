import { useOutletContext } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

const CoverDiv = styled.div`
    background-color:  #ffb975;
    border-radius: 0.5rem;
    color: black;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`;

const Image = styled.img`
    border-radius: 0.5rem;
    @media (width <= 20em) {
        width:9.5em;
        height:relative;
    }
    @media (max-width: 767px){ /* for phones */
        width:15em;
        height:relative;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        width:30em;
        height:relative;
    }
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (width <= 20em) {
        width:9.5em;
    }
    @media (max-width: 767px){ /* for phones */
        width:14em;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        width:25em;
    }
`;

const DescriptionDiv = styled.div`
    @media (width <= 20em) {
        width:9.5em;
    }
    @media (max-width: 767px){ /* for phones */
        width:14em;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        width:25em;
    }
`;

const PriceDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const AddQuantity = styled.input`
    width: 3.5rem;
    height: 1.5rem;
    font-size: medium;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid black;
`;

const AddToCartButton = styled.button`
    width: 12rem;
    height: 3rem;
    font-size: medium;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    // background-color: blue;

    &:hover {
        border: 1px solid black;
    }

    @media (width <= 20em) {
        width: 9.5em;
    }
`;

const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    @media (width <= 20em) {
        flex-direction: column;
    }
    @media (max-width: 767px){ /* for phones */
        flex-direction: column;
    }
`;

function SingleView(){
    const { selectedItem, handleQuantityChange, addToCartClick } = useOutletContext();

    return (
        <CoverDiv key={selectedItem.id}>
            <div><h3>{selectedItem.title}</h3></div>
            <Image
                key={selectedItem.id}
                src={selectedItem.image}
                alt={selectedItem.title}
            />
            <DetailDiv>                
                <DescriptionDiv><label>{selectedItem.description}</label></DescriptionDiv>
                <div><label>Category: {selectedItem.category}</label></div>
                <PriceDiv>
                    <div><label>Unit price: </label><label>{selectedItem.price} lkr</label></div>
                    <InputsDiv>
                        <label>Quantity: </label><AddQuantity type="number" min="0" value={selectedItem.quantity} onChange={(e) => handleQuantityChange(selectedItem.id, e)} />
                        <AddToCartButton onClick={() => addToCartClick(selectedItem.id, selectedItem.addToCart ? "remove" : "add")}>{selectedItem.addToCart ? "Remove from cart" : "Add to cart"}</AddToCartButton>
                    </InputsDiv>
                </PriceDiv>
            </DetailDiv>
        </CoverDiv>
    );
}

export default SingleView;