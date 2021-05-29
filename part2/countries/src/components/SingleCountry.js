import React from "react";

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
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" width="128" height="128" />
    </div>
  );
};

export default SingleCountry;
