import React,{useState, useEffect} from 'react';
import '../../App.css';
import axios from 'axios';

function Burger() {
    const [lettuce, setLettuce] = useState(0);
    const [tomato, setTomato] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    const [price, setPrice] = useState(20);
    const [quantity, setQuantity] = useState(1);

    

    const calculatePrice = function(lettuce, tomato, cheese, meat) {
        setPrice(
            20 +
            (lettuce * 30 +
            tomato * 15 +
            cheese * 20 +
            meat * 30
            )
        );
    }

    const increment = function(e) {
        setQuantity(quantity + e);
    }

    const decrement = function(price) {
        setQuantity(quantity - 1);
    }


    useEffect(() => {
        calculatePrice(lettuce, tomato, cheese, meat);
    }, [lettuce, tomato, cheese, meat]);





    const addRemoveIngredient = (action, ingredient) => {

        let stateValue;
        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
            calculatePrice(lettuce, tomato, cheese, meat);
        }else{
            stateValue = stateValue - 1;
        }
        switch(ingredient){
            case 'lettuce':{
                setLettuce(stateValue >= 0 ? stateValue : 0);
                break;
            }
            case 'tomato':{
                setTomato(stateValue >= 0 ? stateValue : 0);
                break;
            }
            case 'cheese':{
                setCheese(stateValue >= 0 ? stateValue : 0);
                break;
            }
            case 'meat':{
                setMeat(stateValue >= 0 ? stateValue : 0);
                break;
            }
            default: break;
        }
    }
    
    const burgerContent = () => {
        let burger = [];
        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }

        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }

        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }

        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }

        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:8080/orders', {
            lettuce: lettuce,
            tomato: tomato,
            cheese: cheese,
            meat: meat,
            price: price,
            date: new Date(),
            quantity: quantity,
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

        alert(`Your burger is ready!\nPrice: ${price}`);
    }





  return (
    <div className="burgerContainer">
        <div className="burgerIngredients">
            <div className="topSide"></div>
            {burgerContent()}
            <div className="bottomSide"></div>
        </div>
        <div className="ingredientsBlock">
            <p>Lettuce (30/-)</p>
            <div className="ingrBtns">
                <button className="ingrBtn" onClick={() => addRemoveIngredient('add','lettuce')}>Add</button>
                <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','lettuce')}>Remove</button>
            </div>
            <p>TOMATO (15/-)</p>
            <div className="ingrBtns">
                <button className="ingrBtn" onClick={() => addRemoveIngredient('add','tomato')}>Add</button>
                <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','tomato')}>Remove</button>
            </div>
            <p>CHEESE (20/-)</p>
            <div className="ingrBtns">
                <button className="ingrBtn" onClick={() => addRemoveIngredient('add','cheese')}>Add</button>
                <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','cheese')}>Remove</button>
            </div>
            <p>MEAT (30/-)</p>
            <div className="ingrBtns">
                <button className="ingrBtn" onClick={() => addRemoveIngredient('add','meat')}>Add</button>
                <button className="ingrBtn" onClick={() => addRemoveIngredient('remove','meat')}>Remove</button>
            </div>

            
            <div className="quantity"
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Quantity: </p>
                <button className="quantityBtn" onClick={() => decrement(1)}>-</button>
                <p>{quantity}</p>
                <button className="quantityBtn" onClick={() => increment(1)}>+</button>

            </div>
            
            <div className="total"> 
                <h3>
                    Total: {price*quantity}/-
                </h3>
            </div>

        <div className="orderBtn">
            <button className="orderBtn"
            style={{
                backgroundColor: 'teal',
                color: '#000',
                border: '1px solid #000',
                borderRadius: '5px',
                padding: '10px',
                fontSize: '20px',
                cursor: 'pointer'
            }}
            onClick={() =>handleSubmit()}>Order</button>
        </div>
        </div>
    </div>
    );
}

export default Burger




