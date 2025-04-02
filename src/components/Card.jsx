import React from 'react';
import styled from 'styled-components';

const CardContainerDiv = styled.div`
    // padding: 0.5rem;
    display: flex;
    @media (width <= 20em) {
        flex-direction: column;
    }
    gap: 4rem;
    background-color: #ffb975;
    border-radius: 0.5rem;
    @media (width >= 40em) {
        width: 55rem;
    }
    @media (max-width: 767px){ /* for phones */
        flex-direction: column;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        width: 40rem;
        flex-direction: column;
    }
    
`;

const ImageDiv = styled.div`
    width:20rem;
    height:35rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;    
    border: 5px solid white;
    @media (width <= 20em) {
        width:relative;
        height:relative;
    }
    @media (max-width: 767px){ /* for phones */
        // width:relative;
        // height:relative;
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        // width:relative;
        // height:relative;
    }
`;

const Image = styled.img`
    max-width: 75%;
    height: auto;
    border-radius: 0.5rem;  
`;

const Label = styled.label`
    width:20rem;
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
    // align-items: center;
    justify-content: left;
    text-align: left;
    padding: 1rem;
    @media (width <= 20em) {
        flex-direction: ${ ({$quantity}) => ( $quantity ? "column" : "row") };
    }
    @media (max-width: 767px){ /* for phones */
        flex-direction: ${ ({$quantity}) => ( $quantity ? "column" : "row") };
    }
    @media (min-width: 768px) and (max-width: 1023px){ /* for tablets */
        flex-direction: ${ ({$quantity}) => ( $quantity ? "column" : "row") };
    }
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
            <ImageDiv>
                <Image 
                    key={id}
                    src={image}
                    alt={title}                
                    onClick={() => imageClick(id)}                
                />
                <Label></Label>
            </ImageDiv>            
            <DetailsDiv>
                <InsideDiv>{title}</InsideDiv>
                <InsideDiv><LabelTitle>Unit price: </LabelTitle><label>{price + ' lkr'}</label></InsideDiv>
                <InsideDiv $quantity="true"><LabelTitle>Quantity: </LabelTitle><AddQuantity type="number" min="0" value={quantity} onChange={(e) => handleQuantityChange(id, e)} /></InsideDiv>
                <InsideDiv>
                    <AddToCartButton onClick={() => addToCartClick(id, addToCart ? "remove" : "add")}>{addToCart ? "Remove from cart" : "Add to cart"}</AddToCartButton>                    
                </InsideDiv>
            </DetailsDiv>
        </CardContainerDiv>
    );
}

export default Card;