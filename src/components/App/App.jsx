import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from 'components/PokemonForm';
import { PokemonInfo } from 'components/PokemonInfo';

import { Container } from './App.styled.jsx';

export class App extends Component {
  state = {
    pokemonName: '',
  }

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName })
  }

  render() {
    const { pokemonName } = this.state;

    return (
      <Container>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </Container >
    );
  }
}
