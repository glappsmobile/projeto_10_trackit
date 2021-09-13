import styled from 'styled-components';

const Button = styled.button`
    height: ${({height}) => height || '35px' };
    background: ${({ variant }) => (variant === 'white') ? '#FFFFFF' : '#52B6FF' };
    color: ${({ variant }) => (variant === 'white') ? '#52B6FF' : '#FFFFFF' };
    border: none;
    border-radius: 4.63636px;
    padding: 0 12px;
    font-size: ${({ fontSize }) => fontSize || '21px' };
    margin-right: ${({ marginRight }) => marginRight || '0' };
`;

export default Button;