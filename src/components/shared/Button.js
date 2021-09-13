import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${({height}) => height || '35px' };
    background: ${({ variant }) => (variant === 'white') ? '#FFFFFF' : '#52B6FF' };
    color: ${({ variant }) => (variant === 'white') ? '#52B6FF' : '#FFFFFF' };
    border: none;
    border-radius: 4.63636px;
    padding: 0 12px;
    font-size: ${({ fontSize }) => fontSize || '21px' };
    margin-right: ${({ marginRight }) => marginRight || '0' };
`;

const Button = (props) => {
    return (
        (props.loading)? (
            <StyledButton {...props} disabled>
                <Loader type="ThreeDots" color="#FFFFFF" width="60px" />
            </StyledButton>
        ) : (
            <StyledButton {...props}>
                {props.children}
            </StyledButton >
        )
    )
}

export default Button;