import { ReactComponent as LogoImg } from '../../assets/logo-text.svg';
import styled from 'styled-components';

const Logo = styled(LogoImg)`
    margin-top: ${({marginTop}) => marginTop || "0px"};
`;

export default Logo;