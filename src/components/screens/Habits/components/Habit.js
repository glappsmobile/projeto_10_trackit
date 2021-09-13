import styled from 'styled-components';
import DayBlocks from './DayBlocks';

const Habbit = ({name, days, id, deleteHabit}) => {
    
    return (
        <ContainerHabbit>
            <span>{name}</span>
            <DayBlocks days={days}/>
            <ContainerTrash onClick={() => deleteHabit(id)}>
                <ion-icon name="trash-outline" />
            </ContainerTrash>
        </ContainerHabbit>
    )
}

const ContainerHabbit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 18px;
`;

const ContainerTrash = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: fit-content;
    cursor: pointer;
`;


export default Habbit;