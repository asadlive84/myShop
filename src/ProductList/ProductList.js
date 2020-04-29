import React from 'react'


const Product = ({id, title, brand, price, image, addCartItem}) =>{
    return(
        <div className="product">
            <img src={image} alt={title}/>
            <div className="title">
                <spam>{title}</spam>
                <spam>{brand}</spam>

            </div>
            <div className="actions">
                <spam>${price}</spam>
                <button onClick={()=>addCartItem(id)}>Add to cart</button>

            </div>
          </div>
    )
}


const ProductList = ({products, addCartItem}) =>{
    return (
      <div className="product-list">
          {products.map(product=> <Product addCartItem={addCartItem} {...product} key={product.id}/>)}
         
      </div>
    )
  }
export default ProductList
