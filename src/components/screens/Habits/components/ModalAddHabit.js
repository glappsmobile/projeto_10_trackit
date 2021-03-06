import styled from 'styled-components';
import React, { useState } from 'react';

import Button from '../../../shared/Button';
import DayBlocks from './DayBlocks';
import { createHabit } from '../../../../services/trackit.services';

const ModalAddHabit = ({ habit, setHabit, clearHabit, closeModal, refreshHabits, token}) => {
    const [loading, setLoading] = useState(false);

    const toggleDay = (index) => {
        const newHabit = {...habit};
        newHabit.days[index].active = !newHabit.days[index].active
        setHabit(newHabit);
    }

    const submit = (e) => {
        e.preventDefault();
        let hasDay = false;

        habit.days.forEach((day) => {
            if (day.active) {
                hasDay = true;
            }
        });

        if (hasDay) {
            setLoading(true);

            createHabit({
                name: habit.name,
                days: habit.days.filter((day) => day.active).map((day) => day.index )
            }, token).then(() => {
                refreshHabits();
                closeModal();
                clearHabit();
                setLoading(false);
            }).catch((e) => {
                alert("Ocorreu um erro ao criar o hábito");
                setLoading(false);
            })
        } else {
            alert("Selecione ao menos um dia.")
        }
    } 

    return (
        <Form onSubmit={submit} id="form">
            <input
                disabled={loading}
                type="text"
                placeholder="nome do hábito"
                maxLength="64"
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                value={habit.name}
                required
            />

            <DayBlocks days={habit.days} pointer={true} toggleDay={toggleDay} />
            
            <ContainerButtons>
                <Button 
                    variant="white" 
                    marginRight="23px"
                    onClick={closeModal}
                > 
                    Cancelar 
                </Button>
                <Button loading={loading} type="submit" form="form"> Salvar </Button>
            </ContainerButtons>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
`;

const ContainerButtons = styled.form`
    display: flex;
    justify-content: flex-end;
    margin-top: 29px;
`;

export default ModalAddHabit;