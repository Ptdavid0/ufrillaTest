import React, { Component } from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <Container>
                <header>
                    <h1>Dashboard</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/readVagas">Minhas Vagas</Link>
                            </li>
                            <li>
                                <Link to="/makeVagas">Criar Vagas</Link>
                            </li>
                            <li>
                                <Link to="/editVagas">Editar Vagas</Link>
                            </li>
                            <li>
                                <Link to="/freelancers">Freelancers</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Container>
        );
    }
}
