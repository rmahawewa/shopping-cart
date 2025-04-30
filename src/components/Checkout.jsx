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

/**
 * This component initially retreive the data state array from TopLayer component via useOutletContext hook.
 * Then it filters rows where there is a quantity and addToCart is set to true. The filtered data is listed to the end user using map function.
 * In order to find the total price the filtered data array is sent through a reduce function where the product of the quantity and price in each 
 * row is adds up to the accumulator with the initial value of 0
 * The useMemo hook is used in reduce in order to only render when the filteredData is changed.
 */


function Checkout(){
    const { data, addToCartClick } = useOutletContext();

    const filteredData = data ? data.filter(d => d.quantity > 0 && d.addToCart) : [];

    const total = useMemo(() => {
        return filteredData.reduce(
            (accumulator, d) => accumulator + (d.quantity * d.price), 0
        );
    }, [filteredData]);


    return (
        <ContainerDiv>
            {filteredData.map((d) => (
                <DetailDiv key={d.id}>
                    <div><label>Item</label><label>{' ' + d.title}</label></div>
                    <div><label>Quantity:</label><label>{' ' + d.quantity}</label></div>
                    <div><label>Price:</label><label>{' ' + d.quantity * d.price} lkr</label></div>
                    <div><Button onClick={() => addToCartClick(d.id, false)}>Remove</Button></div>
                    <StyledHr/>
                </DetailDiv>
            ))}
            <TotalPrice><label>Total Price:</label><label>{' ' + total.toFixed(2)} lkr</label></TotalPrice>
            <div><Button $checkout="true">Checkout</Button></div>
        </ContainerDiv>
    );

}

export default Checkout;