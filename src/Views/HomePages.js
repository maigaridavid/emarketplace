
// src/Views/HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import Header from './Header.js';

const HomePages = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <Header/>
        </div>
    );
};

export default HomePages;

