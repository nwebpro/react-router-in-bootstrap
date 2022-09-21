import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="about" element={ <About /> } />
        </Routes>
    );
};

export default App;