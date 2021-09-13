import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    
    &:invalid {
        background-color: rgba(220, 53, 69, 0.25);
    }

    & label { 
        margin-bottom: 5px;
    }

    & span {
        margin-top: 5px;
    }

    & input {
        height: 51px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 18px;
    }

    & span {
        color: #dc3545;
        font-size: 12px;
        margin-top: 3px;
        display: ${({ invalid }) => invalid ? 'block' : 'none'}
    }
`;

const InputGroup = ({children, name, errorMessage, invalid}) => {

    return (
        <Container>
            <label>{name}</label>
            <span>{errorMessage}</span>
        </Container>
    )
}
export default InputGroup;