import React, { Component } from 'react';

import { Container, LogInDiv, Title, Form, SubmitButton } from './styles';

export default class FirstPage extends Component {
    handleSubmit = e => {
        this.props.history.push('readVagas');
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
                    <a href="https://www.google.com.br/">
                        Esqueceu sua senha ?
                    </a>
                </LogInDiv>
            </Container>
        );
    }
}
