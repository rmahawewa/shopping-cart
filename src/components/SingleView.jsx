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
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
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
    width: 8rem;
    height: 2.5rem;
    font-size: medium;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    // background-color: blue;

    &:hover {
        border: 1px solid black;
    }
`;

const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
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
                <div><label>{selectedItem.description}</label></div>
                <div><label>Category: {selectedItem.category}</label></div>
                <PriceDiv>
                    <div><label>Unit price: </label><label>{selectedItem.price} lkr</label></div>
                    <InputsDiv>
                        <label>Quantity: </label><AddQuantity type="number" value={selectedItem.quantity} onChange={(e) => handleQuantityChange(selectedItem.id, e)} />
                        <AddToCartButton onClick={() => addToCartClick(selectedItem.id, selectedItem.addToCart ? "remove" : "add")}>{selectedItem.addToCart ? "Remove from cart" : "Add to cart"}</AddToCartButton>
                    </InputsDiv>
                </PriceDiv>
            </DetailDiv>
        </CoverDiv>
    );
}

export default SingleView;