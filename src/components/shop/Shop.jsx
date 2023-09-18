import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from './product/Product';
import Cart from './cart/cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    const cartHendeller = (product) =>{
        const newcart = [...cart, product];
        setCart(newcart)
    }

    return (

        <div className='shop'>
            <div className='shop-container'>
                {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                    cartHendeller={cartHendeller}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;