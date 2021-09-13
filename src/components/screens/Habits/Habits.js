import styled from 'styled-components';
import Main from '../../shared/Main';
import AddButton from './components/AddButton';

const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContainerHabits = styled.div`
    margin-top: 30px;
`;

const Habits = () => {
    return (
        <Main paddingTop='28px'>
            <ContainerTitle>
                <h1>Meus hábitos</h1>
                <AddButton />
            </ContainerTitle>

            <ContainerHabits>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </ContainerHabits>
        </Main>
    )
}

export default Habits;