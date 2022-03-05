import Header from '../components/header'
import NewsCard from '../components/newsCard'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function News({cart}) {
    const [news,setNews] = useState([])

    useEffect(()=> {
        axios.get('https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&page=0&apikey=ed422f5ab8a52bef7a04a8d39de5129d')
        .then(res => {
          console.log("response",res.data
          )
          const newsArray = res.data;
          //console.log(stockObject[0])
          setNews(newsArray.slice(0,20))
          console.log("ListOfStocks",newsArray)
        })
      },[cart])

    return (
        <div className="App">
        <div className="content-container">
          
          <Header />
          {news.map((element,index)=> <NewsCard stock={element}/>
          )}
        </div>
      </div>
    );
}