import React, { Component } from 'react';

import { Container, MakeDiv, Form, SubmitButton } from './styles';

import NavBar from '../NavBar';

import api from '../../services/api';

export default class makeVagas extends Component {
    state = {
        quantidade: '',
        valor: '',
        discricao: '',
        inicio_do_Trabalho: '',
        fim_do_Trabalho: '',
        freelancerType: '',
    };

    async sendData() {
        const {
            quantidade,
            valor,
            discricao,
            inicio_do_Trabalho,
            fim_do_Trabalho,
            freelancerType,
        } = this.state;

        await api.post('/job', {
            quantity: quantidade,
            value: valor,
            description: discricao,
            job_start: inicio_do_Trabalho,
            job_end: fim_do_Trabalho,
            freelancer_type_id: freelancerType,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.sendData();

        alert(`Vaga Criada:
        - Quantidade:${this.state.quantidade}
        - Valor:${this.state.valor}
        - Discricao:${this.state.discricao}
        - Inicio do Trabalho:${this.state.inicio_do_Trabalho}
        - Fim do Trabalho:${this.state.fim_do_Trabalho}
        - Tipo do freelancer:${this.state.freelancerType}`);

        this.setState({
            quantidade: '',
            valor: '',
            discricao: '',
            inicio_do_Trabalho: '',
            fim_do_Trabalho: '',
            freelancerType: '',
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Container>
                <NavBar />
                <MakeDiv>
                    <p>ADICIONAR VAGA</p>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            type="number"
                            placeholder="Quantidade"
                            name="quantidade"
                            value={this.state.quantidade}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="number"
                            placeholder="Valor"
                            name="valor"
                            value={this.state.valor}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="text"
                            placeholder="Discrição"
                            name="discricao"
                            value={this.state.discricao}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="text"
                            placeholder="Inicio do Trabalho"
                            name="inicio_do_Trabalho"
                            value={this.state.inicio_do_Trabalho}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="text"
                            placeholder="Fim do Trabalho"
                            name="fim_do_Trabalho"
                            value={this.state.fim_do_Trabalho}
                            onChange={this.handleChange.bind(this)}
                        />
                        <input
                            type="text"
                            placeholder="Tipo de freelancer"
                            name="freelancerType"
                            value={this.state.freelancerType}
                            onChange={this.handleChange.bind(this)}
                        />
                        <SubmitButton>Criar</SubmitButton>
                    </Form>
                </MakeDiv>
            </Container>
        );
    }
}
