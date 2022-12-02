import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderItem } from "../../components/OrderItem";
import { OrderButton } from "../../components/OrderButton";

import PixSVG from "../../assets/pixPay.svg";
import CardSVG from "../../assets/CreditCard.svg";
import PixQrCode from "../../assets/PixQrCode.svg";
import myOrders from '../../assets/myOrders-icon.svg';

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../service/api";

export function CheckOut() {
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const [isPix, setIsPix] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState(() => {
    const orderData = localStorage.getItem("@foodexplore:order");
    return orderData ? JSON.parse(orderData) : [];
  });
  
  const navigate = useNavigate();

  const details = orders;
  const paymentMethod = isPix ? "credCard" : "pix";

  
  function handleRemoveDish(id){
    const filterOrders = orders.filter(dish => dish.id !== id);
    setOrders(filterOrders);

    localStorage.setItem("@foodexplore:order", JSON.stringify(filterOrders));
  }

  async function handleFinalizePayment(){
    try {
      if(orders.length == 0){
        return alert("O seu carrinho está vazio no momento")
      }
      
      setIsLoadingBtn(true)
      await api.post("/orders", {details, paymentMethod});
    } catch (error) {
      if(error.response){
        return alert(error.response.data.message);
      } else {
        return ("não foi possível completar a operação");
      };
    };
    
    setIsLoading(true);

    localStorage.setItem("@foodexplore:order", []);

    alert("Pedido realizado com sucesso.");

    setIsLoadingBtn(false)

    return navigate("/orders");
  }

  // set total order value
  useEffect(() => {
    let sum = 0;
    orders.forEach(dish => {
      sum += Number(dish.amount) * Number(dish.price.replace(',','.'));
    });
    setTotal(sum);
  }, [orders]);

  return (
    <Container>
      <Header 
        quantity={orders.length}
      />

        <main>
            <div>
              <h3>Meu pedido</h3>
              <div className="Order-Items">
                {
                  orders.map(item => (
                    <OrderItem 
                      key={item.id}
                      title={item.title}
                      quantity={item.amount}
                      img={item.img}
                      price={item.price}
                      remove={handleRemoveDish}
                      id={item.id}
                    />
                  ))
                }
              </div>
              <div className="total">Total: R$ {String(total).replace('.',',')}</div>
            </div>

            <div className="payment-section">
              <h3>Pagamento</h3>
              <div className="payment-content">
                <div className="payment-method">
                  <button 
                    className={`botton-left ${isPix ? 'selected' : ''}`} 
                    onClick={e => setIsPix(true)}
                    disabled={isLoading ? true : false}
                  >
                    <img src={PixSVG} alt="Pix logo" /> 
                    Pix
                  </button>

                  <button 
                    className={!isPix ? 'selected' : ''}
                    onClick={e => setIsPix(false)}
                    disabled={isLoading ? true : false}
                  >
                    <img src={CardSVG} alt="Card" /> 
                    Crédito
                  </button>             
                </div>

                <div >
                  <div className={`paymentPix ${isPix ? '' : 'hidden'}`}>
                    <div className="Code-Img">
                      <img src={PixQrCode} alt="Qr Code" />  
                    </div>
                    <OrderButton 
                      title={isLoadingBtn ? 'Carregando...' : 'Finalizar pagamento'}
                      img={myOrders}
                      onClick={e => handleFinalizePayment()}
                      disabled={isLoadingBtn ? true : false}
                    />
                  </div>

                  <div className={`paymentCard ${isPix ? 'hidden' : ''}`}>
                    <section>
                      <div className="cardData">
                        <label htmlFor="cardNumber">Número do Cartão</label>
                        <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000"/>
                      </div>

                      <div className="card-Validity">
                        <div className="cardData">
                          <label htmlFor="validity">Validade</label>
                          <input type="text" name="validity" placeholder="01/24"/>
                        </div>

                        <div className="cardData">
                          <label htmlFor="cvc">CVC</label>
                          <input type="number" name="cvc" placeholder="123"/>
                        </div>

                      </div>
                    </section>
                    <OrderButton 
                      title={isLoadingBtn ? 'Processando...' : 'Finalizar pagamento'}
                      img={myOrders}
                      onClick={e => handleFinalizePayment()}
                      disabled={isLoadingBtn ? true : false}
                    />
                  </div>
                </div>
              </div>
            </div>
        </main>

      <Footer />
    </Container>
  )
}