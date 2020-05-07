import React, {useContext} from 'react'
import ThemeContext from '../ThemeContext'

import ListProduct from './ListProduct'


const ProductList = ({products, addCartItem}) =>{
    const {dark} = useContext(ThemeContext)
    return (
      <div className={`product-list ${dark ? 'light':'dark'} `}>
          {products.map(product=> <ListProduct addCartItem={addCartItem} {...product} key={product.id}/>)}
         
      </div>
    )
  }
export default ProductList
