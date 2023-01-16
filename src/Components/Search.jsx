import React, { useState } from 'react';
import styles from "./Product.module.css";

function Search({ products, setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if(!searchQuery) {
        setFilteredProducts([]);
        return;
    }
    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="search-bar" >
      <input className='my-search' style={{padding:"10px",width:"30rem",marginTop:"1rem" ,marginBottom:"0.5rem"}}
        type="text"
        placeholder="Search By Name, Color, Type"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
