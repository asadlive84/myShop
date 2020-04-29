import React,{useState, useEffect} from 'react';
import './App.css';

import data from './data'

import NavBar from './NavBar/NavBar'
import ProductList from './ProductList/ProductList'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'


function App() {
  const [products, setProducts] = useState([...data])
  const [cartItems, setCartItems] = useState([])
  const [keyword, setKeyword] = useState('')
  

  useEffect(()=>{

    const results = data.filter(product=>product.title.includes(keyword) || product.brand.includes(keyword))
    
    setProducts(results)

  },[keyword])


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


  const removeCartItem = id => {
    setCartItems((items)=>items.filter(item=>item.id!==id)
    
    )
  }

  return (
    <div className="App">
      <NavBar setKeyword={setKeyword}/>
      <ProductList products={products} addCartItem={addCartItem}/>
      <Cart 
        quantityCount={quantityCount} 
        cartItems={cartItems} 
        removeCartItem={removeCartItem}
        clearCart={clearCart}
        />
      <Footer/>
    </div>
  );
}

export default App;
