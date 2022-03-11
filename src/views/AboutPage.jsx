import Header from '../components/header'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutPage.css'

export default function About() {
    return (
        <div className="App">
        <div className="content-container">
          
          <Header />
          <div className="aboutContent"><b>React Stock API App</b><br></br>
            <div className="title1">Hello! These pages serve as a quick way for you to retrieve small bite sized information about a portfolio of stocks you are interested in. It makes use of react components, passing/lifting states and api calls with axios.</div>
            <div className="title2">This page makes calls to Financial Modeling Prep's API (docs: <a href="https://site.financialmodelingprep.com/developer/docs">here</a>) </div>

            <ul>
                <u>The following pages are:</u>
                <li><i>Ticker Search:</i> Search Stock Tickers and Get Graphical Info</li>
                <li><i>Your Portfolio:</i> Select stocks into a portfolio that will customise results in <i>News</i> and <i>Company Info</i></li>
                <li><i>News:</i> News about your portfolio of stocks</li>
                <li><i>Company Info:</i> Company Info about your portfolio of stocks</li>
            </ul>
          </div>
        </div>
      </div>
    );
}