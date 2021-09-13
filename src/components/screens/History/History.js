import Main from '../../shared/Main';
import styled from 'styled-components';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';

const History = () => {

    const user = useContext(UserContext);
    const history = useHistory();
    if (!user.token) {
        history.push('/');
    }
    
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