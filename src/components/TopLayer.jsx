import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function TopLayer() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("women's clothing");   
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
        <div>
            <div></div>
            <div>
                <div><Link to="/toplayer">About</Link></div>
                <div><Link to="store">Store</Link></div>
                <div><Link to="checkout">Checkout</Link></div>
            </div>
            <div>
                <Outlet context={contextValue}/>
            </div>

        </div>
    );
};

export default TopLayer;