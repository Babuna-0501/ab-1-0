import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from '../../assets/find_icon_xl.svg'
import './find.css';

const products = [
  "Телевизор",
  "Гар утас",
  "Компьютер",
  "Хөргөгч",
  "Хөлдөөгч",
  "Зөөврийн компьютер",
  "Индүү",
  "Плетка",
];

const Find = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = products.filter((product) =>
      product.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="find">
        <div className="find_wrapper">   
        <img src={icon} alt="lazy" />
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>

      <ul>
        <a>
          {searchResults.map((item) => (
            <li key={item} className="item"> <Link style={{textDecoration:"none"}}>{item} </Link></li>
        ))}
        </a>
      </ul>
    </div>
  );
};

export default Find;