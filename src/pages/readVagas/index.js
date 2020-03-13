import React, { Component } from 'react';

import { Container, ReadDiv } from './styles';

import Dashboard from '../Dashboard/';

import api from '../../services/api';

export default class readVagas extends Component {
    async getPosts() {
        const response = await api.get('/job');
        console.log(response.data);
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        return (
            <Container>
                <Dashboard />
                <ReadDiv>
                    <h1>Hello Read Div</h1>
                </ReadDiv>
            </Container>
        );
    }
}
