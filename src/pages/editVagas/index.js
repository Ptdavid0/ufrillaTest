import React, { Component } from 'react';

import { Container, EditDiv } from './styles';

import Dashboard from '../Dashboard/';

export default class editVagas extends Component {
    render() {
        return (
            <Container>
                <Dashboard />
                <EditDiv>
                    <h1>Hello Edit Div</h1>
                </EditDiv>
            </Container>
        );
    }
}
