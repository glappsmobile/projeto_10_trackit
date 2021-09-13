import styled from 'styled-components';
import Progressbar from './shared/Progressbar';

const ContainerFooter = styled.footer`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
`;

const ContainerButtons = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    color: #52B6FF;
    align-items: center;
    justify-items: center;

    span {
        text-align: center;
    }
`;

const ContainerProgressbar = styled.div`
    position: absolute;
    right: 0;
    left:0;
    bottom: 10px;
    margin: 0 auto 0 auto;
    width: 91px;
    height: 91px;
`;

const Header = () => {

    return (
        <ContainerFooter>
            <ContainerButtons>
                <span>Hábitos</span>
                <span />
                <span>Histórico</span>
            </ContainerButtons>
            <ContainerProgressbar>
                <Progressbar text='Hoje' value={36} />
            </ContainerProgressbar>
        </ContainerFooter>
    )
}

export default Header;