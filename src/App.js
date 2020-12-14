import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <Route path="/" exact component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;

