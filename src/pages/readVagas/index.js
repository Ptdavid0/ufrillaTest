import React, { Component } from 'react';

import { Container, ReadDiv } from './styles';

import Dashboard from '../Dashboard/';

export default class readVagas extends Component {
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
