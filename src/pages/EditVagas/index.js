import React, { Component } from 'react';

import { Container, EditDiv, Form, SubmitButton } from './styles';

import Dashboard from '../Dashboard/';

import api from '../../services/api';

export default class editVagas extends Component {
    state = {
        id: '',
        quantidade: '',
        valor: '',
    };

    async updateData() {
        const { id, quantidade, valor } = this.state;
        const res = await api.put('/job', {
            id: id,
            quantity: quantidade,
            value: valor,
        });
        console.log(res);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.updateData();
        console.log(this.state);
        this.setState({
            id: '',
            quantidade: '',
            valor: '',
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Container>
                <Dashboard />
                <EditDiv>
                    <p>EDITAR VAGA</p>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            type="number"
                            placeholder="ID"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="number"
                            placeholder="Nova quantidade"
                            name="quantidade"
                            value={this.state.quantidade}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="number"
                            placeholder="Novo valor"
                            name="valor"
                            value={this.state.valor}
                            onChange={this.handleChange.bind(this)}
                        />
                        <SubmitButton>Salvar</SubmitButton>
                    </Form>
                </EditDiv>
            </Container>
        );
    }
}
