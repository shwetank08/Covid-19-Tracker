import React, { useEffect, useState } from "react";
import { UserContext } from "./Context/UserContext";
import DashBoard from "./Components/DashBoard";


import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css"

const App = () => {
  const [res, setRes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [currcountry, setCurrentCountry] = useState([])
    useEffect(()=>{
      const getCountriesData = async() =>{
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=>response.json())
        .then((data)=>{
          const countries = data.map((country)=>({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries)
        })
      }
      getCountriesData();
    },[])
  return (
    <UserContext.Provider value={{ countries, country, setCountry, currcountry ,setCurrentCountry}}>
      <Header />
      <DashBoard />
      <Footer />
    </UserContext.Provider>
  );
};
export default App;
