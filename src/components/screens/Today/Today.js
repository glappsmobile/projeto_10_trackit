import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import Main from '../../shared/Main';
import { getTodayHabits } from '../../../services/trackit.services'
import styled from 'styled-components';
import Habit from './components/Habit';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Today = () => {
    const user = useContext(UserContext);
    const history = useHistory();
    if (!user.token) {
        history.push('/');
    }

    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(false);

    const refreshHabits = () => {
        setLoading(true);
        getTodayHabits(user.token)
            .then((response) => {
                setHabits(response.data)
                const habitsStates = response.data.map((habit) => habit.done);
                const habitsFinishedCount = habitsStates.filter((state) => state).length;
                const rate = (habitsFinishedCount / habitsStates.length * 100);
                user.setRate(rate)
                setLoading(false);
            }).catch((e) => {
                setLoading(false);
                console.log(e);
            });
    }


    useEffect(refreshHabits, []);

    return (
        <Main>
            <ContainerTitle>
                <h1>Segunda, 17/05</h1>
                {user.rate? (
                    <SuccessText> {user.rate.toFixed()}% dos hábitos concluídos </SuccessText>
                ) : (
                    <GrayText> Nenhum hábito concluído ainda </GrayText>
                )}
            </ContainerTitle>
            {loading ? (
                <ContainerLoading>
                    <Loader type="ThreeDots" color="#52B6FF" width="100px" />
                </ContainerLoading>
            ) : (
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
            )}
        </Main>
    );
}

const ContainerHabits = styled.div`
    margin-top: 30px;
    margin-bottom: 105px;
`;


const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;

    span{
        margin-top: 5px;
    }
`;

const GrayText = styled.span`
    color: #BABABA;
`;

const SuccessText = styled.span`
    color: #8FC549;
`;

const ContainerLoading = styled.div`
    width: fit-content;
`;
export default Today;