import styled from 'styled-components';
import Button from '../../../shared/Button';
import DayBlocks from './DayBlocks';
import { createHabit } from '../../../../services/trackit.services';

const ModalAddHabit = ({habit, setHabit, closeModal, token}) => {

    const toggleDay = (index) => {
        const newHabit = {...habit};
        newHabit.days[index].active = !newHabit.days[index].active
        setHabit(newHabit);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(habit);

        createHabit({
            name: habit.name,
            days: habit.days.filter((day) => day.active).map((day) => day.index )
        }, token).then(console.log).catch((e) => console.log(e.message))
    } 

    return (
        <Form onSubmit={submit} id="form">
            <input
                type="text"
                placeholder="nome do hábito"
                maxLength="64"
                onChange={(e) => setHabit({ ...habit, name: e.target.value })}
                value={habit.name}
                required
            />

            <DayBlocks days={habit.days} toggleDay={toggleDay} />
            
            <ContainerButtons>
                <Button 
                    variant="white" 
                    marginRight="23px"
                    onClick={closeModal}
                > 
                    Cancelar 
                </Button>
                <Button type="submit" form="form"> Salvar </Button>
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