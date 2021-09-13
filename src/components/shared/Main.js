import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: ${({ paddingTop }) => paddingTop || '28px'};
    width: ${({width}) => width || '90%'};
    margin: auto;
`;

export default Main;