import React, { useEffect, useState } from 'react';
import ListItemComponent from '../ListItemComponent/ListItemComponent';
import './Authors.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Authors = () => {
    const [authors, setAuthors]= useState([]);
    const [totalData, setTotalData]= useState(0);
    const [showLoader, setShowLoader]=  useState(true);
    const numOfPages = 10;
    const handleChange = (event, value) => {
        let skip = parseInt(value-1)* totalData/numOfPages
        fetch(`https://api.quotable.io/authors?limit=70&skip=${skip}`)
            .then (res => res.json())
            .then (data => setAuthors(data.results))
    };

    useEffect(() => {
        fetch('https://api.quotable.io/authors?limit=70&skip=0')
            .then (res => res.json())
            .then (data => {
                setAuthors(data.results);
                setTotalData(data.totalCount);
                setShowLoader(false);
            })     
    }, []);
    const handleAddAuthor = (author) => {
         var favAuthors = JSON.parse(localStorage.getItem("favAuthors")||"[]");       
         favAuthors.push(author);
        // Saving
        localStorage.setItem("favAuthors", JSON.stringify(favAuthors));
    }
    const handleRemoveAuthor =  (author)=>{
        var favAuthors = JSON.parse(localStorage.getItem("favAuthors")||"[]");       
        var index = favAuthors.indexOf(favAuthors.find(element => element._id == author._id));
        if(index!==  -1){
            favAuthors.splice(index,1);
        } 
        localStorage.setItem("favAuthors", JSON.stringify(favAuthors));   
    }
    return (
        <div className="body">
            {
                showLoader&&
                 <Box>
                    <br/><br/>
                    <CircularProgress  color="inherit"/>
                    <br/><br/>    
                </Box>
            }
            
            <div className="author-container">
                {
                    authors.map(author => <ListItemComponent key={author._id} author={author} handleAddAuthor={handleAddAuthor}  handleRemoveAuthor={handleRemoveAuthor} ></ListItemComponent>)
                }
            </div>
            <br/><br/>
            <Stack spacing={3} style={{ display: "flex", alignItems: "center" , padding:"5px", borderRadius:"15px"}}  >
                <Pagination count={numOfPages} onChange={handleChange} size="large" color="standard"/>
            </Stack>
            <br/><br/>
        </div>
    );
};

export default Authors;