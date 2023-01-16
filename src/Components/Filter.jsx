import React, { useState } from 'react';

function Filter({ products, setFilterProducts }) {
  const [genderFilter, setGenderFilter] = useState({ Male: false, Women: false });


  const handleFilter = (e) => {
    setGenderFilter({ ...genderFilter, [e.target.value]: e.target.checked });

    let filterProducts = products;
    if (genderFilter.Men === false && genderFilter.Women === false) {
      setFilterProducts(products);
      return;
    }
    if (genderFilter.Men === true) {
      filterProducts = filterProducts.filter(product => product.gender === 'Men');
    }
    if (genderFilter.Women === true) {
      filterProducts = filterProducts.filter(product => product.gender === 'Women');
    }


    setFilterProducts(filterProducts);

  };

  return (
    
    <div className="filter">

  <h3>Color</h3>
      <div>
        <input type="checkbox" value="Red" onClick={handleFilter} />
        <label for="male">Red</label>
      </div>
      <div>
        <input type="checkbox" value="Blue" onClick={handleFilter} />
        <label for="female">Blue</label>
      </div>
      <div>
        <input type="checkbox" value="Green" onClick={handleFilter} />
        <label for="female">Green</label>
      </div>


      <h3> Gender</h3>
      <div>
        <input type="checkbox" value="Men" onClick={handleFilter} />
        <label for="male">Men</label>
      </div>
      <div>
        <input type="checkbox" value="Women" onClick={handleFilter} />
        <label for="female">Women</label>
      </div>

      <h3>Price</h3>
      <div>
        <input type="checkbox" value="0-250" onClick={handleFilter} />
        <label for="male">0-250</label>
      </div>
      <div>
        <input type="checkbox" value="251-450" onClick={handleFilter} />
        <label for="female">251-450</label>
      </div>
      <div>
        <input type="checkbox" value="450" onClick={handleFilter} />
        <label for="female">450</label>
      </div>


      <h3>Type</h3>
      <div>
        <input type="checkbox" value="Polo" onClick={handleFilter} />
        <label for="male">Polo</label>
      </div>
      <div>
        <input type="checkbox" value="Huddie" onClick={handleFilter} />
        <label for="female">Hoodie</label>
      </div>
      <div>
        <input type="checkbox" value="Basic" onClick={handleFilter} />
        <label for="female">Basic</label>
      </div>


    </div>
  );
}

export default Filter;