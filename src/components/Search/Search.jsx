import React from 'react';
import '../Search/Search.Style.css'
import Dokhtar from "../../Imags/img.jpg"

const Search = ({search,setSearch}) => {
      // search
      const handleSearch = e =>{
         setSearch(e.target.value)
      }
 
    return (
        <div  className='search' >
            
            <input className='input-search'  value={search} onChange={handleSearch} placeholder='Search New User...' />
            <img className='img-search' src={Dokhtar} />
        </div>
        
    );
};

export default Search;