import React, { useState, useEffect } from "react";
import './search.css'
import { Link } from 'react-router-dom';
import Arrow from '../../assets/arrow_left.svg'

const products = [
  "Телевизор",
  "Гар утас",
  "Компьютер",
  "Хөргөгч",
  "Хөлдөөгч",
  "Зөөврийн компьютер",
  "Индүү",
  "Плетка",
  "Дуков",
  "Печь",
  "Хиншүү сорогч",
  "Аяга таваг угаагч",
  "Угаалгын машин",
  "Тоос сорогч"
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  // at every occurance of the change event, sets the current value of the form to the state
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
    <div className="search">
        <div className="search_wrapper">   
            <Link to='/'>
              <img src={Arrow} alt="" />
            </Link>
            <input
                type="text"
                placeholder="Та юу хайж байна?"
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

export default Search;
