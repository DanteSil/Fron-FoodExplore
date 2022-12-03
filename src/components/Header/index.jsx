import { Container, SearchOptions } from './styles';

import logout from '../../assets/logout.svg'
import myOrders from '../../assets/myOrders-icon.svg'

import { Input } from '../Input'
import { Logo } from '../Logo'
import { OrderButton } from '../OrderButton'

import { api } from '../../service/api'

import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth'
import { Link, useNavigate } from 'react-router-dom'

export function Header({toggleFavorite, quantity }) {
  const { user, signOut } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const [search, setSearch] = useState('');
  const [dishes, setDishes] = useState([]);

  const navigate = useNavigate();

  const admin = user.isAdmin;

  function handleDetails(id){
    navigate(`/details/${id}`);
  };

  const handleSignOut = async () => {
    const response = await api.get("/fav");
    const favorites = localStorage.getItem("@foodexplore:fav");
    const responseFav = response.data.favorites ;

    if(favorites){
      if(!responseFav){
        await api.post("/fav", {favorites});
      } else {
        await api.patch("/fav", {favorites});
      };
    };

    localStorage.removeItem("@foodexplore:fav");
    localStorage.setItem("@foodexplore:order", JSON.stringify([]));

    navigate('/');
    signOut();
  };

  const handleMode = () => {
    setIsActive(!isActive);
  };

  const handleOrder = () =>{
    navigate(admin ? "/order" : "/checkout");
  };

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get(`/dishes?name=${search}`);
      setDishes(response.data);

      if(!search){
        setDishes([]);
      };
    };
    fetchDishes();
  }, [search]);

  return (
    <Container >
      <div className='top'>
        <div className='logo'>
          <a href="/">
            <Logo />
          </a>
        </div>
        
        <div className='links'>
          {admin ? <a href='/new'>Novo prato</a> :  <a onClick={toggleFavorite}>Meus Favoritos</a>}
          {admin ? ' ' : <a href="/orders" >Ver pedidos</a>}
        </div>

        <div className='search-bar'>
          <Input onChange={e => setSearch(e.target.value)}/> 
          <SearchOptions>
            {dishes && dishes.map(dish => (
              <li
                key={dish.id}
                onClick={() => handleDetails(dish.id)}
              > 
                <img src={`${api.defaults.baseURL}/dishes/${dish.image}`} alt="" />
                {dish.name}
              </li>
            ))}
          </SearchOptions>
        </div>

        <div className='order-button'>
          <OrderButton 
            title={admin ? 'Ver pedidos' : 'Meu pedido'}
            img={myOrders} 
            alt="Lista de pedidos"
            quantity={admin ? '' : quantity}
            add={admin ? false : true}
            onClick={handleOrder}
          />
        </div>

        <a 
          className='logout'
          onClick={handleSignOut}
        >
          <img src={logout} alt="" />
        </a>

      </div>
      
      <div className={isActive ? 'icon iconActive' : 'icon'} onClick={handleMode}>
        <div className='hamburguer hamburguerIcon'></div>
      </div>
      <div className={isActive ? 'menu menuOpen' : 'menu menuClose'}>
        <nav className='list'>
          <ul className='listItems'>
            <li>
              {admin ? <Link to="/new">Novo Prato</Link> : <Link onClick={toggleFavorite}>Meus favoritos</Link>}
            </li>
            <li>
              {admin ? <Link to="/order">Ver pedidos</Link> : <Link onClick={handleOrder}>Meu pedido</Link>}
            </li>
            <li className={admin ? 'hidden' : ''}>
              {admin ? '': <Link to="/orders">Ver pedidos</Link>}
            </li>
            <li><Link to="/">Sair</Link></li>
          </ul>
        </nav>
      </div>

    </Container>
  );
};