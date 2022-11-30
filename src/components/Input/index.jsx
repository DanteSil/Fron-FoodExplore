import { Container } from "./styles";

import { FiSearch } from 'react-icons/fi';

export function Input({...rest}) {
  return(
    <Container>
      <FiSearch size={22}/>
      <input {...rest} type="text" placeholder="Busque pelas opções de pratos"/>
    </Container>
  );
};