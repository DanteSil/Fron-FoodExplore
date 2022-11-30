import { Container } from "./styles";

export function OrderButton({ img, alt: Alt, title, quantity, add = false, ...rest}) {
  return (
    <Container  
      {...rest}
    >
      <img src={img} alt={Alt}/>
      <p>{title}<span className={add ? 'hidden' : ''}> ({quantity})</span></p>
    </Container>
  );
};