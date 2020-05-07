import React from 'react'
import {useParams} from 'react-router-dom'
import ListProduct from '../ProductList/ListProduct'
import data from '../data'

const ProductDetails = props => {
    const {productId} = useParams()
    const product = data.find(p=>p.id === parseInt(productId))
    return (
        <div className="product-details">
            <h1>Product Details {productId} {product.title}</h1>
            <ListProduct {...product}/>
        </div>
    )
}



export default ProductDetails
