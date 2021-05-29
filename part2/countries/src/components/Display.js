import React from "react";
import CountryList from "./CountryList";
import SingleCountry from "./SingleCountry";

const Display = ({ countries, search }) => {
  if (countries === null || countries.length === 0) return null;
  const results = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );
  if (results.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (results.length > 1) {
    return <CountryList countries={results} />;
  } else if (results.length === 1) {
    const displayedCountry = results[0];
    return <SingleCountry country={displayedCountry} />;
  }
  return null;
};

export default Display;
