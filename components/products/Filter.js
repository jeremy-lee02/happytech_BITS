import React, { useState, useEffect } from 'react';
import database from "./database";

function Filter() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');
    useEffect(() => {
      const sortArray = type => {
        const types = {
          name: 'name',
          price: 'price',
        };
        const sortProperty = types[type];
        const sorted = [...database.products].sort((a, b) => a[sortProperty] - b[sortProperty]);
        setData(sorted);
      };
      sortArray(sortType);
    }, [sortType]); 
  
    return (
      <div className="Filter">
        <select onChange={(e) => setSortType(e.target.value)}> 
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        {data.map(product => (
          <div key={product.id}>
            <div>{`name: ${product.name}`}</div>
            <div>{`price: ${product.price}`}</div>
          </div>
        ))}
      </div>
    );
  }

  export default Filter;