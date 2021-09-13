import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import styled from 'styled-components';
import Main from '../../shared/Main';
import ModalAddHabit from './components/ModalAddHabit';
import Button from '../../shared/Button'
import { getHabits, deleteHabitById } from '../../../services/trackit.services'
import Habit from './components/Habit';

const States = {
    NONE: 'NONE',
    ADDING: 'ADDING',
    ERROR: 'ERROR'
}

const Habits = () => {
    const user = useContext(UserContext);
    const history = useHistory();
    if (!user.token) {
        history.push('/');
    }

    const [habits, setHabits] = useState([]);

    const deleteHabit = (id) =>{
        console.log(id)
        deleteHabitById(id, user.token).then(console.log);
        refreshHabits();
    }

    const daysModel = [
        { index: 0, firstLetter: 'D', active: false },
        { index: 1, firstLetter: 'S', active: false },
        { index: 2, firstLetter: 'T', active: false },
        { index: 3, firstLetter: 'Q', active: false },
        { index: 4, firstLetter: 'Q', active: false },
        { index: 5, firstLetter: 'S', active: false },
        { index: 6, firstLetter: 'S', active: false }
    ];

    const blankHabit = { name: '', days: daysModel }

    const [habit, setHabit] = useState({...blankHabit});

    const clearHabit = () => {
        setHabit({...blankHabit})
    }

    const refreshHabits = () => {
        getHabits(user.token)
            .then((response) => {

                const newHabits = response.data.map((newHabit) => {
                    return { 
                        name: newHabit.name,
                        id: newHabit.id,
                        activeDays: newHabit.days,
                        days: daysModel
                    }
                }).map((newHabit) => {
                    return {
                        ...newHabit,
                        days: newHabit.days.map((day, i) => {
                            return {
                                ...day,
                                active: newHabit.activeDays.includes(i)
                            };
                        })
                    };
                })
                
                setHabits(newHabits)
            }).catch(console.log)
    }

    useEffect(refreshHabits, []);

    const [state, setState] = useState('');

    const toggleState = (newState) => {

        if (newState === States.ADDING) {

            if (state === States.ADDING) {
                setState(States.NONE)
            } else {
                setState(States.ADDING)
            }
        }
    }
    
    return (
        <Main paddingTop='28px'>
            <ContainerTitle>
                <h1>Meus hábitos</h1>
                <Button 
                    fontSize="27px"
                    onClick={() => toggleState(States.ADDING)}
                > + </Button>
            </ContainerTitle>
            {(state === States.ADDING) && (
                <ModalAddHabit 
                    habit={habit} 
                    setHabit={setHabit}
                    token={user.token}
                    closeModal={() => setState(States.NONE)}
                    refreshHabits={refreshHabits}
                    clearHabit={clearHabit}
                />
            )}
            <ContainerHabits>
                {(habits.length > 0)? (
                    <>
                        {habits.map((habit) => (
                            <Habit {...habit} deleteHabit={deleteHabit} key={habit.id} />
                        ))}
                    </>
                ) :(
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                )}
            </ContainerHabits>
        </Main>
    )
}


const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ContainerHabits = styled.div`
    margin-top: 30px;
    margin-bottom: 105px;
`;

export default Habits;