import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
// import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  let navigate = useNavigate();


  const [login, setLogin] = useState({
    name: "",
    email: "",
    imageurl: "",
    tokenId: "",
  });

    const responseSuccessGoogle = (response) => {
        console.log(response)
      setLogin({
        name: response.profileObj.name,
        email: response.profileObj.email,
      imageurl: response.profileObj.imageUrl,
      tokenId: response.tokenId,
  }) 
  localStorage.setItem('user', JSON.stringify(response));
  navigate('/home'); 
  }


 const responseErrorGoogle = (error) => {
        console.log(error)
        alert(error.message)
    }
  return (
    <div
    style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f2f2f2'
      
    }}
    >
      <h2>Login</h2>
      <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Google-Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  /></div>
  )
}
