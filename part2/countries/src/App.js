import "./App.css";
import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleNewCountry = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <form>
        find countries <input value={search} onChange={handleNewCountry} />
      </form>
      <Display countries={countries} search={search} />
    </div>
  );
}

export default App;
