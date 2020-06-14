import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Shop from  "../pages/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />

    </Router>
    </div>
  );
}

export default App;
