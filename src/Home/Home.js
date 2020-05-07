import React, {useState, useEffect} from 'react'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import useCart from '../useCart';

import data from '../data'

const Home = ({keyword}) =>{

    const [products, setProducts] = useState([...data])

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

    },[keyword]);
    
    return(
      <React.Fragment>
        <ProductList products={products} addCartItem={addCartItem}/>
          <Cart 
            quantityCount={quantityCount} 
            cartItems={cartItems} 
            removeCartItem={removeCartItem}
            clearCart={clearCart}/>
      </React.Fragment>
    )
  }


  export default Home