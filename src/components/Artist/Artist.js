import React from 'react';
import './Artist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Artist = (props) => {
    const {image, Name, Gender, Nationality, Genre, Remuneration}= props.artist;
    const btnIcon = <FontAwesomeIcon icon={faPaperPlane}/>
    const facebook = <FontAwesomeIcon icon= {faFacebook}/>
    const insta = <FontAwesomeIcon icon= {faInstagram}/>
    const twitter = <FontAwesomeIcon icon= {faTwitter}/>
   
    

    
    
    return (
        <div className="artist">
            <img src={image} alt="" />
            <h3>Name: {Name}</h3>
            <h5>Nationality: {Nationality} Artist</h5>
            <h5>Gender: {Gender}</h5>
            <h5>Music Genre: {Genre}</h5>
            <h5>Remuneration: $ {Remuneration}</h5>
            <button onClick={() => props.handleInviteArtist(props.artist)}>{btnIcon} <strong>Invite Artist</strong></button>
            <p><small>Connet To Social Media:</small> {facebook}  {insta}  {twitter}</p>
            

        </div>
    );
};

export default Artist;