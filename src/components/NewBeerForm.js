import React from 'react';
import axios from 'axios';

import Header from '../components/Header';

import TextInput from './forms/TextInput';

class NewBeerForm extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        this.state
      );
      console.log(response);
      this.props.history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container mt-3">
          <form onSubmit={this.handleSubmit}>
            <TextInput
              id="beerFormName"
              label="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <TextInput
              id="beerFormTagline"
              label="Tagline"
              type="text"
              name="tagline"
              onChange={this.handleChange}
              value={this.state.tagline}
            />
            <TextInput
              id="beerFormDescription"
              label="Description"
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <TextInput
              id="beerFormFirstBrewed"
              label="First Brewed"
              type="text"
              name="first_brewed"
              onChange={this.handleChange}
              value={this.state.first_brewed}
            />
            <TextInput
              id="beerFormBrewersTips"
              label="Brewers Tips"
              type="text"
              name="brewers_tips"
              onChange={this.handleChange}
              value={this.state.brewers_tips}
            />
            <TextInput
              id="beerFormAttenuationLevel"
              label="Attenuation Level"
              type="number"
              name="attenuation_level"
              onChange={this.handleChange}
              value={this.state.attenuation_level}
            />
            <TextInput
              id="beerFormContributedBy"
              label="Contributed by"
              type="text"
              name="contributed_by"
              onChange={this.handleChange}
              value={this.state.contributed_by}
            />

            <button type="submit" className="btn btn-primary">
              Add new beer
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBeerForm;
