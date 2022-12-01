import { Container } from "./styles";

export function OrderButton({ img, alt: Alt, loading = false, title, quantity, add = false, ...rest}) {
  return (
    <Container  
    disabled={loading}
    type="button"
    {...rest}
    >
      <img src={img} alt={Alt}/>
      <p>{title}<span className={add ? '' : 'hidden'}> ({quantity})</span></p>
    </Container>
  );
};