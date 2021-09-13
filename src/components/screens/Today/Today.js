import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import Main from '../../shared/Main';
import { getTodayHabits } from '../../../services/trackit.services'
import styled from 'styled-components';
import Habit from './components/Habit';

const Today = () => {
    const user = useContext(UserContext);
    const history = useHistory();
    if (!user.token) {
        history.push('/');
    }

    const [habits, setHabits] = useState([]);

    const refreshHabits = () => {
        getTodayHabits(user.token)
            .then((response) => {
                setHabits(response.data)
            }).catch(console.log)
    }

    useEffect(refreshHabits, []);

    console.log(habits)

    return (
        <Main paddingTop='28px'>
            <h1>Segunda, 17/05</h1>
            <ContainerHabits>
                {(habits.length > 0) ? (
                    <>
                        {habits.map((habit) => (
                            <Habit 
                                {...habit} 
                                key={habit.id}
                                token={user.token}
                                refreshHabits={refreshHabits}
                             />
                        ))}
                    </>
                ) : (
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                )}
            </ContainerHabits>
        </Main>
    );
}

const ContainerHabits = styled.div`
    margin-top: 30px;
    margin-bottom: 105px;
`;

export default Today;