import React from 'react';
import styled from 'styled-components';

const CardContainerDiv = styled.div`
    padding: 2rem;
    display: flex;
    gap: 4rem;
    background-color: #ffb975;
    // border: 5px solid #ffb975;
    border-radius: 0.5rem;
`;

const Image = styled.img`
    width:15rem;
    height:35rem;
    border-radius: 0.5rem;    
    border: 5px solid white;
`;

const DetailsDiv = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    border-radius: 0.5rem;
`;

const InsideDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    text-align: left;
    padding: 1rem;
`;

const LabelTitle = styled.label`
    width: 8rem;
    text-align: left;
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
    height: 3rem;
    font-size: medium;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    // background-color: blue;
`;

function Card({
    id,
    title,
    image,
    price,
    quantity,
    addToCart,
    imageClick,
    handleQuantityChange,
    addToCartClick
}){
    return (
        <CardContainerDiv key={id}>
            <Image 
                key={id}
                src={image}
                alt={title}                
                onClick={() => imageClick(id)}                
            />
            <DetailsDiv>
                <InsideDiv>{title}</InsideDiv>
                <InsideDiv><LabelTitle>Unit price: </LabelTitle><label>{price + ' lkr'}</label></InsideDiv>
                <InsideDiv><LabelTitle>Quantity: </LabelTitle><AddQuantity type="number" value={quantity} onChange={(e) => handleQuantityChange(id, e)} /></InsideDiv>
                <InsideDiv>
                    <AddToCartButton onClick={() => addToCartClick(id, addToCart ? "remove" : "add")}>{addToCart ? "Remove from cart" : "Add to cart"}</AddToCartButton>                    
                </InsideDiv>
            </DetailsDiv>
        </CardContainerDiv>
    );
}

export default Card;