import React, { useState, useEffect } from 'react';
// import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Filtered from './Filter';
import SearchBar from './Search';
import styles from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
      <div className={styles.myproduct}>
        <div>
          <Filtered products={products} setFilteredProducts={setFilteredProducts} />
        </div>
        <div className={styles.productcontainer} >
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <h3>{product.name}</h3>
              <img src={product.imageURL} alt={product.name} style={{ width: "20%" }} />
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>{product.price}</p>
                <img style={{ height: "30px", cursor: "pointer" }} src='https://img.icons8.com/material-outlined/2x/shopping-cart.png'></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
