import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Body.css'
const Body = () => {
    const [artists, setArtists]= useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fakedata.JSON')
            .then (res => res.json())
            .then (data => setArtists(data))
    }, []);

    const handleInviteArtist = (artist) => {
        const newCart = [...cart, artist];
        setCart(newCart);
    }
    return (
        <div className="body">
            <div className="artist-container">
                {
                    artists.map(artist => <Artist key={artist.id} artist={artist} handleInviteArtist={handleInviteArtist} ></Artist>)
                }
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;