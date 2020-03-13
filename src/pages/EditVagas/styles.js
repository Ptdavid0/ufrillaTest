import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const EditDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100vw;
    margin: 50px;
    border-radius: 15px;
    padding: 10px;

    p {
        font-size: 60px;
        color: cornflowerblue;
    }
`;

export const Form = styled.form`
    margin-top: 35px;
    display: flex;
    flex-direction: column;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 15px 20px;
        border-radius: 4px;
        font-size: 20px;
        color: black;
        margin: 10px 0;
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background-color: cornflowerblue;
    padding: 10px 15px;
    color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 17px;
`;
