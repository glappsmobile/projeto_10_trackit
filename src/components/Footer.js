import styled from 'styled-components';
import Progressbar from './shared/Progressbar';
import { Link } from 'react-router-dom';

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

const Footer = ({rate}) => {

    return (
        <ContainerFooter>
            <ContainerButtons>
                <Link to='/habitos'>
                    <span>Hábitos</span>
                </Link>
                <span />
                <Link to='/historico'>
                    <span>Histórico</span>
                </Link>
            </ContainerButtons>
                <ContainerProgressbar>
                    <Link to='/hoje'>
                        <Progressbar text='Hoje' value={rate} />
                    </Link>
                </ContainerProgressbar>

        </ContainerFooter>
    )
}

export default Footer;