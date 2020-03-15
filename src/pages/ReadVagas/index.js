import React, { Component } from 'react';

import { Container, ReadDiv } from './styles';

import NavBar from '../NavBar';

import api from '../../services/api';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

export default class readVagas extends Component {
    state = {
        date: new Date(),
    };

    async getPosts() {
        const response = await api.get('/job');
        console.log(response.data);
    }

    componentDidMount() {
        this.getPosts();
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <Container>
                <NavBar />
                <ReadDiv>
                    {/* <TileContent /> */}
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                    {/* <h1>Hello Read Div</h1> */}
                </ReadDiv>
            </Container>
        );
    }
}
