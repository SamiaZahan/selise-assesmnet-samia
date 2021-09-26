import React from 'react';
import './CartArtist.css'
const CartArtist = (props) => {
    const {image, Name, Remuneration} = props.artist;
    return (
        <div class="cart-artist">
            <div>
                <img src={image} alt="" />    
            </div>
            <div>
                <p>{Name}</p>
                <p><small>Remuneration: $ {Remuneration}s</small></p>
            </div>
        </div>
    );
};

export default CartArtist;