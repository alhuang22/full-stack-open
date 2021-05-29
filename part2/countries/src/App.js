import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div id={country.name}>{country.name}</div>
      ))}
    </div>
  );
};

const SingleCountry = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        capital {country.capital}
        <br />
        population {country.population}
      </p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" />
    </div>
  );
};

const Display = ({ countries, search }) => {
  const results = countries.filter((country) =>
    country.name.lower().includes(search.lower())
  );
  if (results.length() === 0) return <div></div>;
  if (results.length() > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (results.length() > 1) {
    return <CountryList countries={results} />;
  } else if (results.length() === 1) {
    const displayedCountry = results[0];
    return <SingleCountry country={displayedCountry} />;
  }
};

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState("");

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
