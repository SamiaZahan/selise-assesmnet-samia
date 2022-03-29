import React, { useState } from 'react';
import { Link,   BrowserRouter as Router } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const[auhtColor, setAuthColor]=useState("white")
    const[favAuhtColor, setFavAuthColor]=useState("white")
    const changeAuthColor=()=>{
        setAuthColor("black");
        setFavAuthColor("white");

    }
    const changeFavAuthColor=()=>{
        setFavAuthColor("black");
        setAuthColor("white");

    }
    return (
        <div className="header">
            <Link to="/authors" style={{textDecoration:"none", color:auhtColor}}><h2 onClick={changeAuthColor}>Authors</h2> </Link>
            <Link to="/favAuthors" style={{textDecoration:"none",  color:favAuhtColor}}><h2 onClick={changeFavAuthColor}>Favourite Authors</h2></Link>
            <hr />          
        </div>
    );
};

export default Header;