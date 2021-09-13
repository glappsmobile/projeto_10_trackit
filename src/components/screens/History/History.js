import Main from '../../shared/Main';
import styled from 'styled-components';

const History = () => {
    return(
        <Main>
            <h1> Histórico </h1>
            <ContainerHistory>
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </ContainerHistory>

        </Main>
    )
}

const ContainerHistory = styled.div`
    margin-top: 30px;
    margin-bottom: 105px;
`;

export default History;