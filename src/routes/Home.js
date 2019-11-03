import React, { useState, Fragment } from "react";
import { useInput } from "../hooks";
import { handleCountrySearchSubmit, handleRemoveCountry } from "../handlers";

import Country from "../components/Country";

export default () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [amountInSEK, amountInSEKInput] = useInput({
    type: "number",
    defaultValue: 1
  });
  const [countryName, countryNameInput] = useInput({
    type: "text",
    defaultValue: ""
  });
  const onSearchCountrySubmit = handleCountrySearchSubmit(countryName, {
    setLoading,
    setError,
    setCountries
  });
  const errorClassName = `error${error ? " open" : ""}`;
  const loadingClassName = `loading${loading ? " open" : ""}`;
  return (
    <Fragment>
      <div className={errorClassName}>{error}</div>
      <div className={loadingClassName}>Loading ...</div>
      <div className="main">
        <a href="/login" className="cta login-cta">
          Login
        </a>
        <div className="toolbox">
          <form className="with-submit" onSubmit={onSearchCountrySubmit}>
            <label>Country</label>
            {countryNameInput}
            <input type="submit" value="Search" />
          </form>
          <div className="toolbox-seperator" />
          <form onSubmit={e => e.preventDefault()}>
            <label>Amount in SEK</label>
            {amountInSEKInput}
          </form>
        </div>
        <ul className="countries">
          {countries.map((country, index) => (
            <Country
              data={country}
              amountInSEK={amountInSEK}
              onRemove={handleRemoveCountry(index, setCountries)}
              key={`country-${index}`}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
