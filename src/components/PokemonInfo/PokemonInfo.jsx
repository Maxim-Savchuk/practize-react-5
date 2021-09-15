import { Component } from "react";

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        const nextName = this.props.pokemonName;
        const prevName = prevProps.pokemonName;

        if (prevName !== nextName) {
            this.setState({ status: 'pending' });

            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    return Promise.reject(new Error(`Sorry we didn't find ${nextName} pokemon`),);
                })
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected' }));
        }
    }

    render() {
        const { pokemon, error, status } = this.state;

        if (status === 'idle') {
            return <div>Please enter the name of the pokemon</div>;
        }

        if (status === 'pending') {
            return <div>Loading...</div>;
        }

        if (status === 'rejected') {
            return <h3>{error.message}</h3>;
        }

        if (status === 'resolved') {
            return <div>
                <p>{pokemon.name}</p>
                <img
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    width="240"
                />
            </div>;
        }
    }
}