import React, { Component } from 'react';

import { Redirect, withRouter } from 'react-router-dom';

import { Container, LogInDiv, Title, Form, SubmitButton } from './styles';

export default class FirstPage extends Component {
    handleSubmit = e => {
        this.props.history.push('repository');
    };
    render() {
        return (
            <Container>
                <LogInDiv>
                    <Title>
                        <h1>ufrilla.</h1>
                        <p>Freelancers on Demand</p>
                    </Title>
                    <Form onSubmit={this.handleSubmit}>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                        <SubmitButton>Log In</SubmitButton>
                    </Form>
                    <a href="#">Esqueceu sua senha ?</a>
                </LogInDiv>
            </Container>
        );
    }
}
