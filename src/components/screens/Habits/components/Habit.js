import styled from 'styled-components';
import DayBlocks from './DayBlocks';

const Habbit = ({name, days}) => {

    return (
        <ContainerHabbit>
            <span>{name}</span>
            <DayBlocks days={days}/>
        </ContainerHabbit>
    )
}

const ContainerHabbit = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
`;


export default Habbit;