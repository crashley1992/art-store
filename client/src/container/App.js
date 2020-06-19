import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Shop from  "../pages/Shop";
import "./App.css";
import Cart from '../pages/Cart';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/cart" component={Cart} />

    </Router>
    </div>
  );
}

export default App;
