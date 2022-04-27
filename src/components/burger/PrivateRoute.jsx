
import React from 'react';
import {useNavigate} from 'react-router-dom';


function PrivateRoute({children}) {

    let token = JSON.parse(localStorage.getItem('user')).tokenId;
    // let user = JSON.parse(token);

    console.log(token)
    

    let navigate = useNavigate();

    if(!token){
        navigate('/');
    }
    else{
        return children;
    }
}

 
export default PrivateRoute;