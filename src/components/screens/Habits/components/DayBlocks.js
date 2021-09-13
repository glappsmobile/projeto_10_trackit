import styled from 'styled-components';

const DayBlocks = ({days, toggleDay}) => {

    const toggle =  (i) => {
        if (toggleDay) {
            toggleDay(i);
        }
    }

    return (
        <ContainerDayBlocks>
            {days.map((day, i) => (
                <DayBlock
                    onClick={() => toggle(i)}
                    active={day.active}
                >
                    {day.firstLetter}
                </DayBlock>
            ))}
        </ContainerDayBlocks>
    )
}

const ContainerDayBlocks = styled.form`
    display: flex;
    margin-top: 8px;
`;

const DayBlock = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-color: ${({ active }) => active ? '#CFCFCF' : '#FFFFFF'};
    border-color: ${({ active }) => active ? '#CFCFCF' : '##D4D4D4'};
    color: ${({ active }) => active ? '#FFFFFF' : '#DBDBDB;'};
    border: 1px solid;
    border-radius: 5px;
    font-size: 20px;
`;

export default DayBlocks;