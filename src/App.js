import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import NewBeerForm from './components/NewBeerForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Switch>
          <Route exact path="/beers/:beerId" component={BeerDetails} />
          <Route path="/beers/random" component={BeerDetails} />
          <Route path="/beers" component={Beers} />
          <Route path="/new-beer" component={NewBeerForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
