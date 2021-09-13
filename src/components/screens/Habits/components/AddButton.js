import styled from 'styled-components';

const Button = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
`;

const AddButton = () => {
    return (
        <Button>+</Button>
    )
}

export default AddButton;