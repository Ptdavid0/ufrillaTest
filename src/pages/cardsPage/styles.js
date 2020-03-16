import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        color: black;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background-color: cornflowerblue;
    padding: 0 15px;
    border: 0;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: 0;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: fit-content;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 2% 0 5%;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;
export const UpPart = styled.div`
    width: 100%;
    height: 30%;
    color: white;
    padding: 2% 0;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(
        90deg,
        rgba(71, 159, 216, 1) 100%,
        rgba(0, 212, 255, 1) 100%
    );
    h1 {
        text-align: center;
    }
`;
export const SubPart = styled.div`
    width: 100%;
    height: 70%;
    background-color: white;
    color: grey;
    font-weight: bold;
    border-radius: 0 0 10px 10px;

    td {
        border: 1px solid #eee;
        padding: 0 0 0 2%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }
`;

export const CardDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    margin: 2vh;
    height: 100vh;
    padding: 10px;
    flex-flow: row wrap;
    color: #479fd8;
    border-radius: 10px;
`;
