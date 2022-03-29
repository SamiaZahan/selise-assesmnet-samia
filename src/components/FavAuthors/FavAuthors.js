import React, { useEffect, useState } from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';

const FavAuthors = () => {
    var favAuthors = JSON.parse(localStorage.getItem("favAuthors")||"[]");
    
    var [noFav,setNoFav]= useState(false);
    useEffect(()=>{
        if (favAuthors.length  === 0 ){
            setNoFav(true)
        }
    })
  
    const [favAuthorsState,SetFavAuthorsState] = useState(favAuthors);     
    console.log(favAuthorsState);
    const handleRemoveAuthor = (author)=>{
        var favAuthors = JSON.parse(localStorage.getItem("favAuthors")||"[]");       
        var index = favAuthors.indexOf(favAuthors.find(element => element._id == author._id));
        console.log(index);
        if(index!==  -1){
            favAuthors.splice(index,1); // Removes the third element
        }
        localStorage.setItem("favAuthors", JSON.stringify(favAuthors));
        SetFavAuthorsState(favAuthors)

    }
    return (
        <div className="favAuths">
                {
                    noFav&&
                    <div style={{align:"center"}}>
                       <h2 >No Favourite Authors In List!</h2>
                    </div>
                }
            <div className="author-container"> 
                {
                    favAuthorsState.map(author => <ListItemComponent key={author._id} author={author} handleRemoveAuthor={handleRemoveAuthor} ></ListItemComponent>)
                }   
            </div>
        </div>
    );
};

export default FavAuthors;