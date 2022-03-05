import { useState } from "react";
//import { useSearchParams } from "react-router-dom";

function SearchForm({setUrl}) {
  const [search, setSearch] = useState("");
  //const [queryParams,setQueryParams] = useSearchParams();

  const handleClick = () => {
    //setQueryParams({rarity:search})
    //const searchUrl = `https://api.magicthegathering.io/v1/cards?rarity=${search}`
    const searchUrl = `https://financialmodelingprep.com/api/v3/quote-short/${search}?apikey=ed422f5ab8a52bef7a04a8d39de5129d`
    console.log(search);
    setUrl(searchUrl)
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
