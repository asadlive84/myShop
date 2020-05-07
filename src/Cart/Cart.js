import React, { useState, useContext }  from 'react'

import ThemeContext from '../ThemeContext'

const CartItem = ({id,title, price, quantity, removeCartItem, quantityCount}) =>{

  

  const quantityUpdate = e =>{
    quantityCount(e.target.value, id)
  }


    return(
        <div className="cart-item">
            <button onClick={()=>removeCartItem(id)}>x</button>
            <div className="info">
            <span>{title} x {quantity}</span>
            <input onChange={quantityUpdate} type="number" value={quantity}/>
            
            <span>${price}</span>
            </div>
        </div>
    )
}


const Cart = ({cartItems, removeCartItem, quantityCount, clearCart}) =>{

  const [address, setAddress] = useState('')  
  const {dark} = useContext(ThemeContext)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

    const toggleCheckOut=()=>{
      setCheckoutOpen(status=>!status)
    }

    const addressChange =(e)=>{
      setAddress(e.target.value)
    }

    const total = cartItems.reduce( (sum, cur) => sum + cur.price * cur.quantity, 0)

    return(
      <div className={`cart ${dark ? 'light':'dark'}`}>
          <h4>Cart Items</h4>
          {cartItems.length <1 && (
              <div> 
                  <p>Cart is empty</p>
              </div>
                  
          ) }

          {cartItems.length > 0 && (
              <div className="cart-items">
              {cartItems.map(item=><CartItem quantityCount={quantityCount} {...item} price={item.price*item.quantity} removeCartItem={removeCartItem}/>)}
              <div className="cart-item">
                <div className="info">
                  <span>Total Price</span>
                  <span>${total}</span>
                </div>
                
              </div>

              <div className="cart-item">
                <div className="info">
                  <button style={{color:'#ffff', background:'red'}} onClick={()=>clearCart()}>Cancel</button>
                  <button onClick={toggleCheckOut} style={{color:'#ffff', background:'green'}}>{checkoutOpen ? 'hide':'checkout'}</button>
                </div>
                
              </div>

            {checkoutOpen && (
                <div className="cart-item">
                <div className="info">
                 <input onChange={addressChange} type="text" placeholder="type your checkout address"/>
                 <button
                 disabled={!address}
                  style={{color:'#ffff', background:!address?'grey': 'green'}}>Checkout</button>
                </div>
                
              </div>
            )}


            </div>
          )}
          
          
          
      </div>
    )
  }
  
export default Cart
