import { Container } from "./styles";
import imgLogo from '../../assets/Logo.svg';
import imgLogoFooter from '../../assets/logoFooter.svg';

export function Logo({isFooter = false}) {
  return (
    <Container isFooter={isFooter}>
        <img src={isFooter ? imgLogoFooter : imgLogo} alt="Logo" />

        <strong>food explore</strong>
    </Container>
  );
};