import { Component } from "react";
import { ImSearch } from 'react-icons/im';

import { Form, Input, Button } from "./PokemonForm.styled";

export class PokemonForm extends Component {
    state = {
        pokemonName: '',
    }

    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { onSubmit } = this.props;
        const { pokemonName } = this.state;

        if (pokemonName.trim() === '') {
            return;
        }

        onSubmit(pokemonName);
        this.setState({ pokemonName: '', })
    }

    render() {
        const { pokemonName } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="pokemonName"
                    value={pokemonName}
                    onChange={this.handleNameChange}
                />
                <Button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Find
                </Button>
            </Form>
        )
    }
}