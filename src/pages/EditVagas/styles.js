import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

export const EditDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 2vh;
    height: 100vh;
    border-radius: 15px;
    padding: 10px;

    font-size: 5vh;
    text-decoration-line: underline;
    color: #479fd8;
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
    background-color: #479fd8;
    padding: 10px 15px;
    color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    font-size: 17px;
`;
