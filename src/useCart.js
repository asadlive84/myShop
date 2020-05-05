import {useState} from 'react';


const useCart = (init, products) =>{
    const [cartItems, setCartItems] = useState(init)
  
    const addCartItem = (id) =>{
  
      const item = products.find(product=>product.id===id);
  
      setCartItems((items)=>{
  
        const itemIndex = items.findIndex(item=>item.id===id)
  
        if(itemIndex === -1){
          return [...items,{
            ...item,
            quantity:1
          }];
        }
        
        else{
          return items.map(currentItem=> currentItem.id === id ? ({
            ...item,
            quantity:parseInt(currentItem.quantity)+1
          }):currentItem)
        }
        
      }
      
      );
    }
  
    const clearCart = () => {
      const res = window.confirm("Are you sure clear your Cart Items?")
      if(res === true){
        setCartItems([]);
      }
    }
  
    const removeCartItem = id => {
      setCartItems((items)=>items.filter(item=>item.id!==id)
      
      )
    }
  
    const quantityCount = (quantity, id) => {
      
      const item = cartItems.find(product=>product.id === id)
  
      setCartItems((items)=>{
        const itemIndex = items.findIndex(item=>item.id===id)
        if(itemIndex !== -1){
          return items.map(cuttentItem => cuttentItem.id === id ? ({
            ...item,
            quantity:parseInt(item.quantity)+parseInt(quantity)
  
          }):cuttentItem )
        }
      })
      
      
  
    }
  
  
    return {
      cartItems,  
      clearCart,
      removeCartItem,
      addCartItem,
      quantityCount,
      
    }
  
  
  }

  
export default useCart;