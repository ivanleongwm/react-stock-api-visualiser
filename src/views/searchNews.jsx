import { useState } from "react";
import axios from 'axios';
//import { useSearchParams } from "react-router-dom";

function SearchForm({setDailyPrices, setMinutePrices}) {
  const [search, setSearch] = useState("");
  //const [queryParams,setQueryParams] = useSearchParams();

  const searchStocks = () => {
    axios.get(`https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&page=0&apikey=ed422f5ab8a52bef7a04a8d39de5129d`)
        .then(res => {
          const stockObject = res.data;
          console.log(stockObject)
          //console.log(stockObject["historical"].slice(0,7))
          //setDailyPrices(stockObject["historical"].slice(0,7))
        })
    
    //axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/1min/${search}?apikey=ed422f5ab8a52bef7a04a8d39de5129d`)

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
