import { Container } from "./style";

import { SelectWrapper } from "./style";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";


export function OrderManager(){
  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  async function handleStatus(id, status){
    await api.patch("/allOrders", {id, status});
    navigate(0);
  };
  
  useEffect(()=> {
    async function fetchOrder() {
      const response = await api.get('/allOrders');
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
    }
    fetchOrder();
  }, []);

  return (
    <Container>
      <Header />

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
                <td className="select-col">
                  <SelectWrapper>
                    <span id='orderStatus' className={item.status}></span>
                    <select disabled={item.status === "Entregue" ? true : false} value={item.status} onChange={e => handleStatus(item.id, e.target.value)} name="select" id="select" >
                      <option value="Pendente">Pendente</option> 
                      <option value="Preparando"> Preparando</option>
                      <option value="Entregue">  Entregue</option>
                    </select> 
                  </SelectWrapper>
                </td>
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
  );
};