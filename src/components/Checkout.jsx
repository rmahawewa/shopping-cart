import { useOutletContext } from "react-router-dom";
import React from 'react';
import { useMemo } from "react";
import styled from 'styled-components';

const ContainerDiv = styled.div`
    background-color:  #ffb975;
    border-radius: 0.5rem;
    color: black;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: left;
    text-align: left;
    gap: 1rem;
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const StyledHr = styled.hr`
    border: 1px solid black;
    width: 100%
`;

const TotalPrice = styled.div`
    font-weight: bolder;
`;

const Button = styled.button`
    height: 2rem;
    padding: ${ ({$checkout}) => ( $checkout ? "0.5rem" : "0.5rem") };
    border: none;
    border-radius: 0.5rem;
    font-size: ${ ({$checkout}) => ( $checkout ? "large" : "normal") };
    font-weight: ${ ({$checkout}) => ( $checkout ? "bold" : "normal") };

    &:hover {
        border: 1px solid black;
    }
`;


function Checkout(){
    const { data, addToCartClick } = useOutletContext();

    const filteredData = data ? data.filter(d => d.quantity > 0 && d.addToCart) : [];

    const total = useMemo(() => {
        return filteredData.reduce(
            (accumulator, d) => accumulator + (d.quantity * d.price), 0
        );
    }, [filteredData]);

    // const total = filteredData.reduce((accumulator, d) => {
    //     return accumulator + (d.quantity * d.price);
    // }, 0);

    return (
        <ContainerDiv>
            {filteredData.map((d) => (
                <DetailDiv key={d.id}>
                    <div><label>Item</label><label>{' ' + d.title}</label></div>
                    <div><label>Quantity:</label><label>{' ' + d.quantity}</label></div>
                    <div><label>Price:</label><label>{' ' + d.quantity * d.price} lkr</label></div>
                    <div><Button onClick={() => addToCartClick(d.id, "remove")}>Remove</Button></div>
                    <StyledHr/>
                </DetailDiv>
            ))}
            <TotalPrice><label>Total Price:</label><label>{' ' + total.toFixed(2)} lkr</label></TotalPrice>
            <div><Button $checkout="true">Checkout</Button></div>
        </ContainerDiv>
    );

}

export default Checkout;