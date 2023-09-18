import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {img,name,price,seller,ratings} =props.product;
    const addToCartHendeler = props.cartHendeller
    return (
        <div className='product-div'>
            <div className='product'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h3>Price: {price}$</h3><br/>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} start</p>
            </div>
            <div>
                <button onClick={() => addToCartHendeler(props.product)} className='cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/> </button>
            </div>
        </div>
        
    );
};

export default Product;