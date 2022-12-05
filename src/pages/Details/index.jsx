import {Container} from './styles';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {OrderButton} from '../../components/OrderButton';
import {Ingredient} from '../../components/Ingredient';

import { useEffect, useState } from 'react';
import { api } from '../../service/api';

import Order from '../../assets/myOrders-icon.svg';
import Plus from '../../assets/plus.svg';
import Less from '../../assets/less.svg';

import { useParams } from 'react-router-dom';

export function Details() {
  const [data, setData] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [amount, setAmount] = useState(1);
  const [orderItem, setOrderItems] = useState(() => {
    const orderData = localStorage.getItem("@foodexplore:order");
    return orderData ? JSON.parse(orderData) : [];
  });
  
  const params = useParams();
  
  //Set order items
  function handleOrderItem() {
    const item = {
      id: data.id,
      amount,
      title: data.name,
      price: data.price,
      img: data.image
    };

    setOrderItems(prevState => [...prevState, item]);
    setAmount(1);
    alert("Produto adicionado ao carrinho!")
  };

  // set item quantity
  function handleQuantityPlus() {
    setAmount(amount + 1);
  };
  
  function handleQuantityLess() {
    if(amount <= 0) {
      return;
    };
    setAmount(amount - 1);
  };

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setIngredients(response.data.ingredients);
    }
    fetchDish();
  }, []);

  useEffect(() => {
    localStorage.setItem("@foodexplore:order", JSON.stringify(orderItem));
  
}, [orderItem]);

  return (
  <Container >
    <Header 
      quantity={orderItem.length}
    />

    <main>
      <div className='item-image'>
        <img src={`${api.defaults.baseURL}/dishes/${data.image}`} alt="" />
      </div>

      <div className='description'>
      <div className='text'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>

      <div className='ingredients'>
        {
          ingredients.map(ing => (
            <Ingredient 
              key={ing.id}
              title={ing.name}
              img={ing.image}
            />
          ))
        }
      </div>

      <section>
        <div className='price'>
            <span>RS {data.price}</span>
          <div className="quantity">
            <button onClick={handleQuantityLess}>
              <img src={Less} alt="" />
            </button>
              {amount <= 9 ? `0${amount}` : amount}
            <button onClick={handleQuantityPlus}>
              <img src={Plus} alt="" />
            </button>
          </div>
        </div>

        <div className='order-button2'>
          <OrderButton onClick={handleOrderItem} img={Order} title="incluir"/>
        </div>
      </section>
      </div>
    </main>

    <Footer />
  </Container>
  )
}
