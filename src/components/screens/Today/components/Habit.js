import styled from 'styled-components';
import { checkHabit, uncheckHabit } from '../../../../services/trackit.services'

const Habbit = ({name, done, id, token, currentSequence, highestSequence, refreshHabits}) => {
    
    const toggle = () => {
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
                <SmallText done={done}> Sequência atual: {currentSequence} {(currentSequence === 1)? 'dia' : 'dias'} </SmallText>
                <SmallText 
                    currentSequence={currentSequence}
                    highestSequence={highestSequence}
                > 
                    Seu recorde: {highestSequence} {(highestSequence === 1) ? 'dia' : 'dias'} 
                </SmallText>
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
    color: ${({currentSequence, highestSequence, done}) => {

        if (done) {
            return '#8FC549';
        }

        if (currentSequence && currentSequence === highestSequence) {
            return '#8FC549';
        }
        
        return 'inherit';
    }}
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
        color: ${({ done }) => done ? '#8FC549' : '#EBEBEB'};
        transition: 250ms;
    }   


`;

export default Habbit;