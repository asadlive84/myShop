import React  from 'react'
import {Link} from 'react-router-dom'

const ListProduct = ({id, title, brand, price, image, addCartItem}) =>{
    return(
        <div className="product">
            <Link to={`/product/${id}`}>
                <img src={image} alt={title}/>
                <div className="title">
                    <spam>{title}</spam>
                    <spam>{brand}</spam>

                </div>
            </Link>
            
            <div className="actions">
                <spam>${price}</spam>
                <button onClick={()=>addCartItem(id)}>Add to cart</button>

            </div>
          </div>
    )
}


export default ListProduct;
