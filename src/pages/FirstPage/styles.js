import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LogInDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    min-height: 500px;
    min-width: 500px;
    background-color: white;
    border-radius: 5px;
    color: #479fd8;
    padding: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    a {
        color: grey;
        text-decoration: none;
        margin-top: 10px;
    }
`;

export const Title = styled.div`
    text-align: center;
    height: fit-content;
    width: fit-content;
    align-self: center;
    h1 {
        font-size: 90px;
        margin: 5px auto 0;
    }

    p {
        font-size: 18px;
        color: black;
        font-weight: bold;
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
