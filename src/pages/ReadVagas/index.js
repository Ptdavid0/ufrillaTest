import React, { Component } from 'react';

import { Container, ReadDiv } from './styles';

import Dashboard from '../Dashboard/';

import api from '../../services/api';

import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

export default class readVagas extends Component {
    state = {
        date: new Date(),
        activeStartDate: new Date(),
    };

    async getPosts() {
        const response = await api.get('/job');
        console.log(response.data);
    }

    componentDidMount() {
        this.getPosts();
    }

    // tileContent = ({ activeStartDate, date, view }) => {
    //     console.log(`Date:${date.getDay()}/${date},
    //     View: ${view} ,
    //     Active:${activeStartDate} `);

    //     return view === 'month' && date.getDay() === 1 ? (
    //         <p>It's Sunday!</p>
    //     ) : null;
    // };

    onChange = date => this.setState({ date });

    render() {
        return (
            <Container>
                <Dashboard />
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
