import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from "./components/layout/NavBar";
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';


import backgroundImage from './pattern.png';

function App() {
  return (
    <Router>
    <div className="App" style= {{background: `url(${backgroundImage})`}}>
    <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <NavBar />
      <div className="container">
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
