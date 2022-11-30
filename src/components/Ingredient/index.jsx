import { Container } from "./styles";

import { api } from "../../service/api";

export function Ingredient({img, title, ...rest}) {
  return (
    <Container>
      <img src={`${api.defaults.baseURL}/${img}`} alt={title} />
      <span>{title}</span>
    </Container>
  );
};