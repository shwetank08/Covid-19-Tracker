import React, { useContext, useState, useEffect } from 'react';
import {UserContext} from "../Context/UserContext";
import Cards from "./Cards";
import { Container } from '@material-ui/core';
import "../App.css";
const DashBoard = () => {
    const {country, setCountry,currcountry, setCurrentCountry} = useContext(UserContext);

    
    return (
        <Container className="mt-5">
           <Cards/>
        </Container>
    )
}

export default DashBoard;
