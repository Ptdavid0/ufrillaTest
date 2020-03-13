import React, { Component } from 'react';

import { Container, MakeDiv } from './styles';

import Dashboard from '../Dashboard/';

export default class makeVagas extends Component {
    render() {
        return (
            <Container>
                <Dashboard />
                <MakeDiv>
                    <h1>hello Make Div</h1>
                </MakeDiv>
            </Container>
        );
    }
}
