import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setContries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setContries(data));
  }, []);
  return (
    <div>
      Countries : {countries.length}
      <div className="country-container">
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
