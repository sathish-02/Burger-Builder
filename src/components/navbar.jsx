import React from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = ()=> {
let navigate = useNavigate()

  return (
        <div className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px',
          padding: '10px',
          backgroundColor: '#f2f2f2',
          alignItems: 'center',
          height: '100%'
        }}>
          <div className="logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px'
          }}>
            
              <h3
              onClick={()=>{
                navigate('/home')
              }}
              >Home</h3>
            
          </div>
          <div className="nav-links"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '20px',
            width: "20%"
          }}>
            <Link to="/orderHistory">
              <h3>Order History</h3>
            </Link>

            <Link to="/">
              <h3>{localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).profileObj.name : 'Login'}</h3>
            </Link>

            <Link to="/">
              <h3
              onClick={()=>{
                localStorage.removeItem('user');
              }}
              >logout</h3>
            </Link>
          </div>
        </div>
  )
}