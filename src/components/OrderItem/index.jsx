import { api } from "../../service/api";
import { Container } from "./styles";

export function OrderItem({img, quantity, title, price, id, remove, ...rest}) {
  return(
    <Container {...rest}>
        <img src={`${api.defaults.baseURL}/dishes/${img}`} alt="" />
        <div>
          <p>{quantity} x {title} <span> R${price}</span></p>
          <button onClick={e => remove(id)}>
            Excluir
          </button>
        </div>
    </Container>
  );
};