import React from 'react';
import beer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="container my-4">
      <Link to="/beers" className="no-link-decoration">
        <div className="card" style={{ width: '100%' }}>
          <img src={beer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">All Beers</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/beers/random" className="no-link-decoration">
        <div className="card" style={{ width: '100%' }}>
          <img src={randomBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Random Beers</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </Link>

      <Link to="/new-beer" className="no-link-decoration">
        <div className="card" style={{ width: '100%' }}>
          <img src={newBeer} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">New Beer</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
