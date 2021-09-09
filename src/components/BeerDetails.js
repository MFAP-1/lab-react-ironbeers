import React from 'react';

import Header from './Header';
import axios from 'axios';

class BeerDetails extends React.Component {
  state = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    description: '',
    attenuation_level: '',
    contributed_by: '',
  };

  componentDidMount = async () => {
    try {
      let response;
      if (this.props.match.params.beerId !== 'random') {
        response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
        );
      } else {
        response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
      }
      this.setState({ ...response.data });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="card" style={{ maxWidth: '540px' }}>
          <div className="detail-img mt-3">
            <img
              className="card-img-top w-25"
              src={this.state.image_url}
              alt={this.props.match.params.beerId}
            />
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h2>{this.state.name}</h2>
              <span className="text-secondary">
                {this.state.attenuation_level}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="text-secondary">{this.state.tagline}</h5>
              <span>
                <small>{this.state.first_brewed}</small>
              </span>
            </div>
          </div>
          <p className="card-text px-3">{this.state.description}</p>
          <p className="card-text m-3">
            <small className="text-muted">{this.state.contributed_by}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default BeerDetails;
