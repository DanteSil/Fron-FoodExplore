import { Container } from "./styles";

export function Section({ title, children }) {
  return(
    <Container >
      <div >
        <h2>{title}</h2>
        {children}
      </div>
    </Container>
  );
};