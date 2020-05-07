import React, {useContext} from 'react'
import {
    Link
  } from "react-router-dom";
  
import ThemeContext from '../ThemeContext'


const NavBar = ({setKeyword}) =>{
    const {dark, toggle} = useContext(ThemeContext)
    const handleChange = (e)=>{
        setKeyword(e.target.value)
    }
    return (

        <div className="nav-bar">
            <span>My Shop {dark ? "dark":'light'} </span>
            <input onChange={handleChange} placeholder="search product...."/>
            <button onClick={toggle}>Change Theme</button>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
            </div>
            
        </div>
            
        
            

        
    )
}

export default NavBar;