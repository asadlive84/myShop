import React,{useState, useEffect} from 'react';
import './App.css';

import data from './data'

import NavBar from './NavBar/NavBar'
import ProductList from './ProductList/ProductList'
import Cart from './Cart/Cart'
import Footer from './Footer/Footer'

import useCart from './useCart';


const App = ()=> {
  const [products, setProducts] = useState([...data])
  
  const [keyword, setKeyword] = useState('')
  
  const {
    cartItems,
    clearCart,
    removeCartItem,
    addCartItem,
    quantityCount
  } = useCart([], products)

  useEffect(()=>{

    const results = data.filter(product=>product.title.includes(keyword) || product.brand.includes(keyword))
    
    setProducts(results)

  },[keyword])



  


  
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
