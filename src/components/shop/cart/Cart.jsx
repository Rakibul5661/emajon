import React from 'react';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDeleteLeft, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Product from '../product/Product';

const Cart = (props) => {
    const cart = props.cart
    let total = 0; 
    let shiping = 0;
    for(const Product of cart){
        total= total + Product.price;
        shiping = shiping + Product.shipping;
    }
    const tex =total*7/100;
    const grandTotal = total + shiping + tex;

    return (
        <div>
                <h3>Order Summary</h3>
            <div className='pricing'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shiping}</p>
                <p>Tax: ${tex}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
                <button className='btn btn-cart'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}/></button>
                <button className='btn btn-order'>Review Order <FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    );
};

export default Cart;