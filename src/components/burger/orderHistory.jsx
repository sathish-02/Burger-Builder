import React,{useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function OrderHistory() {

    const [orderHistory, setOrderHistory] = useState([]);

    const navigate = useNavigate();

    function getData() {
        axios.get("http://localhost:8080/orders").then(res => {
            console.log(res.data);
            setOrderHistory(res.data);
        }
        ).catch(err => console.log(err));
    }

    useEffect(() => {
        getData();
    }, []);


    const handleClick =(id) => {
        navigate(`/orderDetails/${id}`);
    }



  return (
    <div>
        <h1>Order History</h1>
        <table
        border="2"
        cellSpacing="20"
        cellPadding="20"
        >
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Order Total</th>
                </tr>
            </thead>
            <tbody>
                {orderHistory.map((order,id) => (
                    <tr
                    onClick={()=>
                    handleClick(order.id)}

                     key={id}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.price}</td>   
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default OrderHistory


