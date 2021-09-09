import React from 'react';
import Header from './Header';
import axios from 'axios';

import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

class Beers extends React.Component {
  state = {
    allBeersArr: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      // console.log(response.data);
      this.setState({ allBeersArr: response.data });
    } catch (err) {
      console.error(err);
    }
  };

  filterBeer = async (word) => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${word}`
      );
      // console.log(response.data);
      this.setState({ allBeersArr: response.data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar filterBeer={this.filterBeer} />
        {this.state.allBeersArr.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              className="no-link-decoration"
              key={beer._id}
            >
              <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0 d-flex align-items-center">
                  <div className="col-md-4 w-25 detail-img">
                    <img
                      src={beer.image_url}
                      className="img-fluid rounded-start img-control"
                      alt={beer._id}
                    />
                  </div>
                  <div className="col-md-8 w-75">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">{beer.tagline}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created by: {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
