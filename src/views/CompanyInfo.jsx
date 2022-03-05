import Header from '../components/header'
import NewsCard from '../components/newsCard'
import RatiosTable from '../charts/RatiosTable';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CompanyInfo({cart}) {
    const [ratios,setRatios] = useState([])

    const ratioz = [
        {
          "dividendYielTTM": 0.005393148250291108,
          "dividendYielPercentageTTM": 0.539314825029110800,
          "peRatioTTM": 27.127182, //YES
          "pegRatioTTM": 0.38047022211864406,
          "payoutRatioTTM": 0.1434510180498235,
          "currentRatioTTM": 1.0378115386179136, //yes
          "quickRatioTTM": 0.875262580129291,
          "cashRatioTTM": 0.251528046945939,
          "daysOfSalesOutstandingTTM": 62.95505427901555,
          "daysOfInventoryOutstandingTTM": 9.94906574137643,
          "operatingCycleTTM": 25.472229810174785,
          "daysOfPayablesOutstandingTTM": 125.90749262427401,
          "cashConversionCycleTTM": -60.49924405286427,
          "grossProfitMarginTTM": 0.4301906043248758,// Yes
          "operatingProfitMarginTTM": 0.3090031533900926, //Yes
          "pretaxProfitMarginTTM": 0.3089132830940757,
          "netProfitMarginTTM": 0.2657914004699688,
          "effectiveTaxRateTTM": 0.13959219296819517,
          "returnOnAssetsTTM": 0.2637916425099229,
          "returnOnEquityTTM": 1.4981376638855781, // Yes
          "returnOnCapitalEmployedTTM": 0.5004045082335618,
          "netIncomePerEBTTTM": 0.8604078070318049,
          "ebtPerEbitTTM": 0.9997091605861269,
          "ebitPerRevenueTTM": 0.3090031533900926,
          "debtRatioTTM": 0.811296699030145,
          "debtEquityRatioTTM": 4.299324361897347,
          "longTermDebtToCapitalizationTTM": 0.5971572739848007,
          "totalDebtToCapitalizationTTM": 0.6306064807682432,
          "interestCoverageTTM": 43.281377267678636,
          "cashFlowToDebtRatioTTM": 0.9140295444551214,
          "companyEquityMultiplierTTM": 5.299324361897347,
          "receivablesTurnoverTTM": 5.797787074923758,
          "payablesTurnoverTTM": 2.898953766708803,
          "inventoryTurnoverTTM": 36.686861810755616,
          "fixedAssetTurnoverTTM": 9.640030577143586,
          "assetTurnoverTTM": 0.9924762127122624,
          "operatingCashFlowPerShareTTM": 6.847418856003188,
          "freeCashFlowPerShareTTM": 6.213684417819627,
          "cashPerShareTTM": 3.8991017662327647,
          "operatingCashFlowSalesRatioTTM": 0.2966803498597759,
          "freeCashFlowOperatingCashFlowRatioTTM": 0.9074491495977406,
          "cashFlowCoverageRatiosTTM": 0.9140295444551214,
          "shortTermCoverageRatiosTTM": 6.941740367369658,
          "capitalExpenditureCoverageRatioTTM": 10.804871005005776,
          "dividendPaidAndCapexCoverageRatioTTM": 10.804871004090462,
          "priceBookValueRatioTTM": 37.18286166212533,
          "priceToBookRatioTTM": 37.18286166212533,
          "priceToSalesRatioTTM": 7.0697198031311865,
          "priceEarningsRatioTTM": 26.598752971806473,
          "priceToFreeCashFlowsRatioTTM": 26.259782285057877,
          "priceToOperatingCashFlowsRatioTTM": 23.82941710319758,
          "priceCashFlowRatioTTM": 23.82941710319758,
          "priceEarningsToGrowthRatioTTM": 0.38047022211864406,
          "priceSalesRatioTTM": 7.0697198031311865,
          "dividendYieldTTM": 0.005393148250291108,
          "enterpriseValueMultipleTTM": 21.089632922642014,
          "priceFairValueTTM": 37.18286166212533,
          "dividendPerShareTTM": 0.88 //Yes
        }
      ]

    const getData = (ticker) => {
        axios.get(`https://financialmodelingprep.com/api/v3/ratios-ttm/${ticker}?apikey=ed422f5ab8a52bef7a04a8d39de5129d`)
        .then(res => {
          console.log("response",res.data
          )
          const ratiosData = res.data;
          //console.log(stockObject[0])
          setRatios(ratiosData)
          console.log("ListOfStocks",ratios)
        })
    }

    useEffect(()=> {
        let stocks = []
        for (let stock of cart) {
            getData(stock.symbol);
            stocks.push(stock.symbol)
        }
        
        let tickers = stocks.join(",");
        console.log(tickers)

        
      },[cart])

    return (
        <div className="App">
        <div className="content-container">
          
          <Header />
          <RatiosTable ratioz={ratioz}/>
        </div>
      </div>
    );
}