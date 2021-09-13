import styled from 'styled-components';
import { checkHabit, uncheckHabit } from '../../../../services/trackit.services'

const Habbit = ({name, done, id, token, refreshHabits}) => {
    
    const toggle = () => {
        console.log(done)
        if(!done){
            checkHabit(id, token)
                .then(refreshHabits)
                .catch(() => {
                    alert('Ocorreu um erro ao marcar o hábito');
                });
        } else {
            uncheckHabit(id, token)
                .then(refreshHabits)
                .catch(() => {
                    alert('Ocorreu um erro ao desmarcar o hábito');
                });
        }
    }

    return (
        <ContainerHabbit>
            <div>
                <Text>{name}</Text>
                <SmallText> Sequência atual: 3 dias </SmallText>
                <SmallText> Seu recorde: 5 dias </SmallText>
            </div>

            <ContainerCheckBox 
                onClick={toggle}
                done={done}
            >
                <ion-icon name="checkbox" />
            </ContainerCheckBox>
        </ContainerHabbit>
    )
}

const ContainerHabbit = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 18px;

    &>div {
        display: flex;
        flex-direction: column;
    }
`;

const Text = styled.span`
    font-size: 20px;
`;

const SmallText = styled.span`
    font-size: 13px;
`;

const ContainerCheckBox = styled.div`
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    cursor: pointer;

    ion-icon {
        font-size: 85px;
        border-radius: 5px;
        color: ${({ done }) => done ? '#8FC549' : '#EBEBEB'}
    }   


`;

export default Habbit;