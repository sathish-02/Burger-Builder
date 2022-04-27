import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios';


function OrderDetails() {

    let {id} = useParams();
    console.log(id)


    const [order, setOrderDetails] = useState([]);


    useEffect(()=>{
        axios.get(`http://localhost:8080/orders/${id}`).then(res => {
            console.log(res.data);
            setOrderDetails(res.data);
        }
        ).catch(err => console.log(err));
    },[])

    




  return (
    <div>
        <h1>Order Details</h1>
        <div>
            <ul>

                    <li key={id}>
                        <h3>Order ID: {order.id}</h3>
                        <h3>Ordered Date: {order.date}</h3>
                        <h3>Ordered Items:
                            <li>lettuce: {order.lettuce}</li>
                            <li>tomato: {order.tomato}</li>
                            <li>cheese: {order.cheese}</li>
                            <li>meat: {order.meat}</li>
                        </h3>
                        <h3>Order Total: {order.price}</h3>
                    </li>
                
            </ul>
        </div>

    </div>
  )
}

export default OrderDetails;