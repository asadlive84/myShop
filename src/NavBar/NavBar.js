import React from 'react'

const NavBar = ({setKeyword}) =>{
    const handleChange = (e)=>{
        setKeyword(e.target.value)
    }
    return (
        <div className="nav-bar">
            <span>My Shop</span>
            <input onChange={handleChange} placeholder="search product...."/>
        </div>
    )
}

export default NavBar;