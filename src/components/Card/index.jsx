import { Container } from "./styles";

import Plus from '../../assets/plus.svg';
import Less from '../../assets/less.svg';

import { FiHeart, FiTrash2 } from "react-icons/fi";

import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

// css for slider card
import "keen-slider/keen-slider.min.css";
//---------------
export function Card({setFavoriteDishes, setOrderItems, id, handleDetails, favoriteDishes, removeDish, handleEdit, description, price, img, title, }) {
  const [amount, setAmount] = useState(1);
  const { user } = useAuth();

  function handleQuantityPlus() {
    setAmount(amount + 1);
  };
  
  function handleQuantityLess() {
    if(amount <= 0) {
      return;
    };
    setAmount(amount - 1);
  };

  function handleOrderItem() {
    const item = {
      id,
      amount,
      title,
      price,
      img
    };

    setOrderItems(prevState => [...prevState, item]);
    setAmount(1);

    alert("Produto adicionado ao carrinho!")
  };

  const [favorite, setFavorite] = useState(() => {
    const favData = localStorage.getItem("@foodexplore:fav");
    if(favData) {
      const fav = JSON.parse(favData);
      const isFav = fav.filter(dish => dish == id);
      if(isFav.length === 1){
        return true;
      };
    };
    return false;
  });

  function handleBtnClick(){
    removeDish();
  };

  function handleFavorite(){
    setFavorite(!favorite);

    if(favorite){
      const favoriteFiltered = favoriteDishes.filter(plate => plate !== id);
      setFavoriteDishes(favoriteFiltered);
    } else {
      setFavoriteDishes(prevState => [...prevState, id]);
    };
  };

  let toggleClassCheck = favorite ? ' selected' : "";

  return (
    <Container isAdmin={user.isAdmin} className='keen-slider__slide'>
      <div className='card-content'>
        <button
          className={`favorite${toggleClassCheck}`}
          onClick={!user.isAdmin ? handleFavorite : handleBtnClick}
        >
          {user.isAdmin ? <FiTrash2 size={25}/> : <FiHeart size={25}/> }
        </button>

        <img src={`${api.defaults.baseURL}/dishes/${img}`} alt="imagem do prato" />

        <a onClick={user.isAdmin ? handleEdit : handleDetails}>{title} <span>&gt;</span></a>
        <p>{description}</p>

        <div className="price">
          R$ {price}
        </div>

        <div className="card-footer">
          <div className="quantity">
            <button onClick={handleQuantityLess}>
              <img src={Less} alt="" />
            </button>
              {amount <= 9 ? `0${amount}` : amount}
            <button onClick={handleQuantityPlus}>
              <img src={Plus} alt="" />
            </button>
          </div>

          <button onClick={handleOrderItem} className="add-button">incluir</button>
        </div>
      </div>
    </Container>
  );
};