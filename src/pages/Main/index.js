import React, { Component } from 'react';

import { Container, Form, SubmitButton } from './styles';

import { FaAddressCard, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

export default class Main extends Component {
    state = {
        newVaga: '',
    };

    handleInputChange = e => {
        this.setState({ newVaga: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state.newVaga);

        const response = await api.get(`/job`);

        console.log(response.data);
    };

    render() {
        const { newVaga } = this.state;
        return (
            <Container>
                <h1>
                    <FaAddressCard />
                    Cadastro de Vaga
                </h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar Vagas"
                        value={newVaga}
                        onChange={this.handleInputChange}
                    />

                    <SubmitButton>
                        <FaPlus color="FFF" size={14} />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}
