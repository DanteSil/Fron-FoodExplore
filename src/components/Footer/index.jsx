import { Container } from "./styles";

import {Logo} from '../Logo';

export function Footer() {
  return (
    <Container>
      <div className="bottom">
        <a href="/">
          <Logo isFooter/>
        </a>

        <span>© 2022 - Todos os direitos reservados.</span>
      </div>
    </Container>
  );
};