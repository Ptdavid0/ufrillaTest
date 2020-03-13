import React, { Component } from 'react';

import { Container, FreeDiv } from './styles';

import Dashboard from '../Dashboard';

import api from '../../services/api';

export default class freelancers extends Component {
    async getPosts() {
        const response = await api.get('/freelancer-type');
        console.log(response.data);
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <Container>
                <Dashboard />
                <FreeDiv>
                    <h1>Hello Read Div</h1>
                </FreeDiv>
            </Container>
        );
    }
}
