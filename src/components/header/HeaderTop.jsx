import React from 'react';
import { Link } from "react-router-dom"

const HeaderTop = ({setToggle,toggle}) => {
    return (
        <div className="header-top">{/*onClick={() => setToggle(prev => !prev)} this means if the toggle is false it will change it to true and if its true it will change it to false */}
        <div onClick={() => setToggle(prev => !prev)} className="header-top-menu">{toggle? <i className="bi bi-x-lg"></i>:<i className="bi bi-list"></i>}</div>
        <div className="header-top-phone"><i className="bi bi-telephone-fill"></i>123-456-789</div>
        <div className="header-top-text">Welcome To Online Book Store</div>
        <Link to="/login" className="header-top-link"><i className="bi bi-person-fill"></i> Login</Link>
        
    </div>
    );
}

export default HeaderTop;
