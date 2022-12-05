import { Container } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { useState, useEffect } from "react";

import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";

export function CostumerOrders() {
  //orders already made
  const [items, setItems] = useState([]);
  const { user } = useAuth()

  // get quantity in cart
  const [orders, setOrders] = useState(() => {
    const orderData = localStorage.getItem("@foodexplore:order");
    return orderData ? JSON.parse(orderData) : [];
  })

  useEffect(()=> {
    async function fetchOrder() {
      const response = await api.get(`/orders/${user.id}`);
      const data = response.data;

      const newData = data.map(data => {
        const time = data.updated_at.split(' ');
        return( {
          id: data.id,
          status: data.status,
          description: data.items,
          date: time[0].replaceAll('-', '/').split('/').reverse().join('/').slice(0,5),
          hour: time[1].slice(0,5).replaceAll(':', 'h')
        });
      });
      setItems(newData);
    };
    fetchOrder();
  }, [])

  return (
    <Container>
      <Header 
        quantity={orders.length}
      />

      <main>
        <h1>Pedidos</h1>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Códido</th>
                <th>Detalhamento</th>
                <th>Data e hora</th> 
              </tr>
            </thead>

            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td> <div className={item.status}/>{item.status}</td>
                  <td>{String(item.id).padStart('6', '0')}</td>
                  <td>{item.description.map((dish, index) => (
                    <span key={index}>{dish.quantity} x {item.description.length - 1 == index ? dish.dish : dish.dish + ', '} </span>
                    ))}
                  </td>
                  <td>{item.date} às {item.hour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </Container>
  )
}