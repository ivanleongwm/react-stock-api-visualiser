import { useState } from "react";
import axios from 'axios';
//import { useSearchParams } from "react-router-dom";

function SearchForm({setUrl}) {
  const [search, setSearch] = useState("");
  //const [queryParams,setQueryParams] = useSearchParams();

  const searchStocks = () => {
    axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${search}?serietype=line&apikey=ed422f5ab8a52bef7a04a8d39de5129d`)
        .then(res => {
          const stockObject = res.data;
          console.log(stockObject)
          //setStock(stockObject[0])
          //console.log(stock)
        })
  }


  const handleClick = () => {
    searchStocks()
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

export default SearchForm;
