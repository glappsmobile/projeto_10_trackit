import styled from 'styled-components';
import LogoText from './shared/LogoText'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 10px 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Avatar = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`;

const Header = ({image}) => {

    return (
        <StyledHeader>
            <LogoText />
            <Avatar src={image} />
        </StyledHeader>
    )
}

export default Header;