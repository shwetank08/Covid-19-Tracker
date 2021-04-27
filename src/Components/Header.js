import React, { useContext, useState, useEffect } from "react";
import { MenuItem, Select, FormControl, Container } from "@material-ui/core";
import { UserContext } from "../Context/UserContext";
import "../App.css"
const Header = () => {
  const { countries, country, setCountry, currcountry, setCurrentCountry } = useContext(UserContext);

    useEffect(() => {
      fetch(`https://disease.sh/v3/covid-19/all`)
      .then(res=>res.json())
      .then(data=>{
        setCurrentCountry(data)
        console.log(data)
      })
    }, [])

    const changeCountry = async e => {
        const current = e.target.value;
        const url = current==='worldwide'?("https://disease.sh/v3/covid-19/all"):(`https://disease.sh/v3/covid-19/countries/${current}?strict=true`)
        await fetch(url)
        .then((res)=>res.json())
         .then((data)=>{
            setCurrentCountry(data)
            console.log(data)
            setCountry(current);
          });
            

    }

  return (
    <div className="app">
    <div className="header">
    <h1 >COVID-19 TRACKER</h1>
      <FormControl
        className="dropdown"
      >
        
        <Select variant="outlined" value={country} onChange={changeCountry}>
        <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries &&
            countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          
        </Select>
      </FormControl>
    </div>
    </div>
  );
};
export default Header;
