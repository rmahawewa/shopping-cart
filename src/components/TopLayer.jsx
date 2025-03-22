import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import image_top from '../images/image_top.png';

/* style start */
const ContainerDiv = styled.div`
    width:100%;
    height:100%;
    padding: 1rem;
    display: flex;
    flex-direction:column;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
`;

const TopImageDiv = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
    background-color:  #ffb975;
    border-radius: 0.5rem;
`;

const NavigationBarDiv = styled.div`
    position:sticky;
    top:0;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-template-rows: 1fr;
    background-color: #ffb975;
    padding: 1rem;
    border-radius: 0.5rem;
`;

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const OutletDiv = styled.div`
    padding: 3rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: black;
`;

const HeadImage = styled.img`
    padding-top: 0.5rem;
`;

/* style end */

function TopLayer() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("All");   
    const [selectedItem, setSelectedItem] = useState({});

    const navigate = useNavigate();
    

    useEffect(() => {
        const url = "https://fakestoreapi.com/products";

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();

                //add new keys into the array
                const newArray = json.map((obj, index) => {
                    //Create a copy of the object to avoid modifying the original
                    const newObj = { ...obj };
            
                    //Add keys with different values
                    newObj.quantity = 1;
                    newObj.addToCart = false;
            
                    return newObj;
                })

                setData(newArray);
            }catch (err){
                setError(err);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    function imageClick(id){
        console.log(id);
        const entity = data.find(d => d.id === id);
        if(entity){
            setSelectedItem(entity);
            navigate('single_view', { replace: true })
        }
    }

    function handleQuantityChange(id, event){
        const dataArray = [...data];
        const entity = dataArray.find(
            d => d.id === id
        );
        if(entity){
            if(event && event.target){
                entity.quantity = event.target.value;
                setData(dataArray);
            }else{
                console.error("Event or event.target is undefined.");
            }
        }else{
            console.error(`Entity with id ${id} is not found.`)
        }
    }

    function addToCartClick(id, task){
        const dataArray = [...data];
        const entity = dataArray.find(
            d => d.id === id
        );
        if(entity){
            if(task.localeCompare("add") === 0){
                entity.addToCart = true;
            }
            if(task.localeCompare("remove") === 0){
                entity.addToCart = false;
            }
            
            setData(dataArray);
        }else{
            console.error(`Entity with id ${id} is not found.`)
        }
    }

    function handleSelectChange(event){
        const value = event.target.value;
        setCategory(value);
    }

    const contextValue = {
        data,
        category,
        imageClick,
        selectedItem,
        handleQuantityChange,
        addToCartClick,
        handleSelectChange,
    };

    return (
        <ContainerDiv>
            <TopImageDiv>
                <div><HeadImage src={image_top} /></div>
            </TopImageDiv>
            <NavigationBarDiv>
                <div><StyledLink to="/toplayer"><label>About</label></StyledLink></div>
                <div><StyledLink to="store">Store</StyledLink></div>
                <div><StyledLink to="checkout">Checkout</StyledLink></div>
            </NavigationBarDiv>
            <OutletDiv>
                <Outlet context={contextValue}/>
            </OutletDiv>
            <FooterDiv>
                <div>
                    <div>
                        <h3>Subscribe to our news-letter</h3>
                        <input type='text' placeholder='e-mail' /><button>Subscribe</button>
                    </div>
                    <div>
                        <h3>Follow us</h3>
                        
                    </div>
                </div>
                <div></div>
            </FooterDiv>

        </ContainerDiv>
    );
};

export default TopLayer;