import React, { useEffect, useState } from 'react';
import './ListItemComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import {  faPlus, faCut} from '@fortawesome/free-solid-svg-icons';


const ListItemComponent = (props) => {
    const [render, setRender]  = useState("none");
    const favAuthors = JSON.parse(localStorage.getItem("favAuthors")||"[]"); 
    const {name,bio,link,_id}= props.author;
    const addBtnIcon = <FontAwesomeIcon icon={faPlus}/>
    const delBtnIcon = <FontAwesomeIcon icon={faCut}/>
    const [addFav,  setAddFav]= useState("Add Favorite");
    const [addDisabled,  setAddDisabled]=useState(false);
    const [removeDisabled,  setRemoveDisabled]=useState(true);
    console.log(favAuthors.indexOf(favAuthors.find(element => element._id == _id)));
    useEffect(() => {
        const current= favAuthors.find(element => element._id == _id);
        const index= favAuthors.indexOf(current);
        if(index !== -1){
            setRemoveDisabled(false);
            setAddDisabled(true);
            setAddFav("Added");
            
        } 
        
    }, [props])
    const changeAddEffect=()=>{
        setAddFav("Added");
        setAddDisabled(true);
        setRemoveDisabled(false);
        document.getElementById("addBtn").setAttribute("disabled", addDisabled);
        document.getElementById("removeBtn").setAttribute("disabled", removeDisabled);

    }
    const changeRemoveEffect=()=>{
        setAddFav("Add Favorite");
        setAddDisabled(false);
        setRemoveDisabled(true);
        document.getElementById("addBtn").setAttribute("disabled", addDisabled);
        document.getElementById("removeBtn").setAttribute("disabled", removeDisabled);

    }
   
    return (
       
            <div id="author" className="author" >
            <h3>Name: {name}</h3>
            <h5>Bio: {bio}</h5>
            <h5>Link: {link}</h5>   
            <button id="addBtn" disabled={addDisabled}
               onClick={() => {
                changeAddEffect();
                props.handleAddAuthor(props.author);
                
              }}
            >{addBtnIcon} <strong>{addFav}</strong></button>
            <button id="removeBtn" disabled={removeDisabled}
            onClick={() => {
                props.handleRemoveAuthor(props.author)
                changeRemoveEffect();
            }}
            >{delBtnIcon} <strong>Remove favorite</strong></button>            

           </div>
       
        
    );
};

export default ListItemComponent;