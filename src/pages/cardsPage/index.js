import React, { Component } from 'react';

import { Container, Card, UpPart, SubPart, CardDiv } from './styles';

import api from '../../services/api';

import NavBar from '../NavBar';

export default class cardsPage extends Component {
    constructor() {
        super();
        this.state = { vagas: [] };
    }
    async componentDidMount() {
        const response = await api.get(`/job`);
        await this.setState({
            vagas: response.data,
        });
    }

    render() {
        const vagas = this.state.vagas.map(vaga => {
            return (
                <Card key={vaga.id}>
                    <UpPart>
                        <h1>Vaga</h1>
                    </UpPart>
                    <SubPart>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Quantidade:</td>
                                    <td>{vaga.quantity}</td>
                                </tr>
                                <tr>
                                    <td>Valor:</td>
                                    <td>{vaga.value}</td>
                                </tr>
                                <tr>
                                    <td>Discricao:</td>
                                    <td>{vaga.description}</td>
                                </tr>

                                <tr>
                                    <td>Inicio do Trabalho:</td>
                                    <td>{vaga.job_start}</td>
                                </tr>
                                <tr>
                                    <td>Fim do trabalho:</td>
                                    <td>{vaga.job_end}</td>
                                </tr>
                                <tr>
                                    <td>Tipo de Freelancer:</td>
                                    <td>{vaga.freelancer_type_id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </SubPart>
                </Card>
            );
        });
        return (
            <Container>
                <NavBar />
                <CardDiv>{vagas}</CardDiv>
            </Container>
        );
    }
}
