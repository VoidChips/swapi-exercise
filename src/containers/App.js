import React, { Component } from 'react';
// import Person from '../components/Person';
import People from '../components/People';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://swapi.co/api/people/');
      const people = await response.json();
      this.setState({characters: people});
    }
    catch (err) {
      console.log('Error loading', err);
    }
  }

  render() {
    const characters = this.state.characters.results;
    return characters === undefined ? 
    <h1>Loading</h1> : 
    (
      <div className='app'>
        <h1>Star Wars Characters</h1>
        <People {...characters}/>
      </div>
    );
  }
}

export default App;