import React from 'react';
import './Cart.css'
import CartArtist from '../CartArtist/CartArtist';
const Cart = (props) => {
    const {cart} = props;
    let total=0;
    for(const artist of cart){
        total= total+artist.Remuneration
    }
    return (
        <div className="cart">
            <h3>Hired Artists:</h3>
            {
               cart.map(artist => <CartArtist artist={artist}></CartArtist>) 
            }
            <h4>Total Expence: {total} $</h4> 
        </div>
    );
};

export default Cart;