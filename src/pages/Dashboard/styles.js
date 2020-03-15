import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    header {
        width: 10vw;
        height: 100vh;
        background-color: white;
    }

    ul {
        list-style: none;
        margin-top: 0;
        padding: 0;
        background-color: white;
        text-align: center;
        font-size: 20px;
    }

    li {
        padding: 20px 0;
        border-bottom: 1px solid grey;
    }
    a {
        color: black;
        text-decoration: none;
    }

    h1 {
        /* width: 100vw; */
        text-align: center;
        font-weight: normal;
        line-height: 5vh;
        font-size: 2vh;
        letter-spacing: 0.2vh;
        background-color: #34363a;
        border-bottom: 1px solid black;
    }
`;
