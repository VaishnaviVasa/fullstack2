import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:"20px"}}>
            <Link to="/" style={{color:'red'}}><b>Home</b></Link><br></br>
            <Link to="/register" style={{color:'red'}}><b>SignUp</b></Link><br></br>
            <Link to="/products" style={{color:'red'}}><b>View the products</b></Link>
            <Link to="/user" style={{color:'red'}}><b>users</b></Link>
        </div>
    );
}

export default Navigation;
