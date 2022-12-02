import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState, useEffect } from "react";

import banner from '../../assets/BannerImg.png';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { api } from "../../service/api";

export function Home() {
  // General slide setup/var
  const [currentSlide, setCurrentSlide] = useState(0);
  const [options, setOptions] = useState({});
  
  const [sliderRef, instanceRef] = useKeenSlider(options);
  const [sliderRef2, instanceRef1] = useKeenSlider(options);
  const [sliderRef3, instanceRef2] = useKeenSlider(options);
  // -----------

  const [dishes, setDishes] = useState([]);
  const [favoriteDishes, setFavoriteDishes] = useState(() => {
    const favData = localStorage.getItem("@foodexplore:fav");
    return favData ? JSON.parse(favData) : [];
  });

  const [showFav, setShowFav] = useState(false);

  const [main, setMain] = useState([]);
  const [favMain, setFavMain] = useState([]);

  const [drinks, setDrinks] = useState([]);
  const [favDrinks, setFavDrinks] = useState([]);

  const [desserts, setDesserts] = useState([]);
  const [favDesserts, setFavDesserts] = useState([]);

  // items add on cart
  const [orderItem, setOrderItems] = useState(() => {
    const orderData = localStorage.getItem("@foodexplore:order");
    return orderData ? JSON.parse(orderData) : [];
  });

  const navigate = useNavigate();

  async function toggleFavorite(){
    if(!favoriteDishes){
      return alert("Você ainda não escolheu os seus favoritos.");
    };

    const filterDishes = dishes.filter(dish => favoriteDishes.includes(dish.id)); 

    const filterMain = filterDishes.filter(dish => dish.foodCategory === "principal");
    setFavMain(filterMain);

    const filterDrink = filterDishes.filter(dish => dish.foodCategory === "bebida");
    setFavDrinks(filterDrink);

    const filterDesert = filterDishes.filter(dish => dish.foodCategory === "sobremesa");
    setFavDesserts(filterDesert);

    setShowFav(!showFav);

    if(showFav) {
      navigate(0);
    };
  };

  async function handleRemove(id) {
    const confirm = window.confirm("Deseja realmente remover o prato?");
    if(confirm){
      await api.delete(`/dishes/${id}`);
      navigate(0);
    };
  };

  function handleEdit(id){
    navigate(`/dishEdit/${id}`);
  };
  
  function handleDetails(id){
    navigate(`/details/${id}`);
  };

  //slider config
  useEffect(() => {
    setTimeout(() => {
      setOptions({
        breakpoints: {
          "(min-width: 320px)": {
            slides: { perView: 1}
          },
          "(min-width: 650px)": {
            slides: { perView: 1.4, spacing: 15}
          },
          "(min-width: 1024px)": {
            slides: { perView: 2.6, spacing: 15}
          },
          "(min-width: 1440px)": {
            slides: { perView: 3.4, spacing: 27}
          }
        },
        initial: 0,
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel);
        },
        loop: true
      });
    }, 2000);
  }, []);

  useEffect(() => {
    async function fetchDishes(){
      const response = await api.get("/dishes");
      setDishes(response.data);
    }
    fetchDishes();
  }, []);
  
  useEffect(() => {
    async function fetchFav(){
      const response = await api.get("/fav");
      const localData = localStorage.getItem("@foodexplore:fav");
      const backFav = JSON.parse(response.data.favorites);
      const localFav = JSON.parse(localData) ;
      if(backFav.length != 0 && localFav.length == 0){
        localStorage.setItem("@foodexplore:fav", response.data.favorites);
      };
    };
    fetchFav();
  }, []);
  
  useEffect(()=> {
    const selectDishes = () => {
      const onlyMain = dishes.filter(dish => dish.foodCategory === "principal");   
      setMain(onlyMain);
      
      const onlyDrinks = dishes.filter(dish => dish.foodCategory === "bebida");     
      setDrinks(onlyDrinks);
      
      const onlyDesert = dishes.filter(dish => dish.foodCategory === "sobremesa");     
      setDesserts(onlyDesert);
    }
    selectDishes();
  },[dishes]);

  // Set order
  useEffect(() => {
    localStorage.setItem("@foodexplore:order", JSON.stringify(orderItem));
}, [orderItem]);
  
// Set order
  useEffect(() => {
      localStorage.setItem("@foodexplore:fav", JSON.stringify(favoriteDishes));
  }, [favoriteDishes]);
  
  return(
    <Container>
      <Header 
        toggleFavorite={toggleFavorite}
        quantity={orderItem.length}
      />

      <main>
        <div className="banner-content">
          <div className="slogan">
            <img src={banner} alt="imagem de hambúrguer diversos" /> 
            <div className="banner-description">
              <h3>Sabores inigualáveis</h3>
              <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
            </div>
          </div>
        </div>

        <Section title='Pratos Principais'>
          <div ref={sliderRef} className='keen-slider'>
            {
              !showFav ?
              main.map(dish => {
                return(
                  <Card
                    setOrderItems={setOrderItems} 
                    key={dish.id}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    img={dish.image} alt={dish.name}
                    removeDish={e => handleRemove(dish.id)}
                    handleEdit={e => handleEdit(dish.id)}
                    handleDetails={e => handleDetails(dish.id)}
                    setFavoriteDishes={setFavoriteDishes}
                    favoriteDishes={favoriteDishes}
                    id={dish.id}
                  />
                )
              })
              :
              favMain.map(dish => {
                return(
                  <Card
                    setOrderItems={setOrderItems} 
                    key={dish.id}
                    title={dish.name}
                    description={dish.description}
                    price={dish.price}
                    img={dish.image} alt={dish.name}
                    removeDish={e => handleRemove(dish.id)}
                    handleEdit={e => handleEdit(dish.id)}
                    handleDetails={e => handleDetails(dish.id)}
                    setFavoriteDishes={setFavoriteDishes}
                    favoriteDishes={favoriteDishes}
                    id={dish.id}
                  />
                )
              })
            }
          </div>
          <> 
            <div className={`${showFav && favMain.length == 0 || main.length ==0 ? "hidden" : ""} container-left`}>
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
            </div>

            <div className={`${showFav && favMain.length == 0 || main.length ==0 ? "hidden" : ""} container-right`}>
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide === -1
                }
              />
            </div>
          </>
        </Section>

        <Section title='Sobremesas'>
          <div ref={sliderRef2} className='keen-slider'>
            {
              !showFav ?
              desserts.map(dessert => {
                return (
                  <Card
                  setOrderItems={setOrderItems} 
                  key={dessert.id}
                  title={dessert.name}
                  description={dessert.description}
                  price={dessert.price}
                  img={dessert.image} alt={dessert.name}
                  removeDish={e => handleRemove(dessert.id)}
                  handleEdit={e => handleEdit(dessert.id)}
                  handleDetails={e => handleDetails(dessert.id)}
                  setFavoriteDishes={setFavoriteDishes}
                  favoriteDishes={favoriteDishes}
                  id={dessert.id}
                  />
                )
              })
              :
              favDesserts.map(dessert => {
                return (
                  <Card
                    setOrderItems={setOrderItems} 
                  key={dessert.id}
                  title={dessert.name}
                  description={dessert.description}
                  price={dessert.price}
                  img={dessert.image} alt={dessert.name}
                  removeDish={e => handleRemove(dessert.id)}
                  handleEdit={e => handleEdit(dessert.id)}
                  handleDetails={e => handleDetails(dessert.id)}
                  setFavoriteDishes={setFavoriteDishes}
                  favoriteDishes={favoriteDishes}
                  id={dessert.id}
                  getAmount
                  />
                )
              })
            }
          </div>

          <> 
            <div className={`${showFav && favDesserts.length == 0 || desserts.length ==0 ? "hidden" : ""} container-left`}>
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef1.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
            </div>

            <div className={`${showFav && favDesserts.length == 0 || desserts.length ==0 ? "hidden" : ""} container-right`}>
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef1.current?.next()
                }
                disabled={
                  currentSlide === -1
                }
              />
            </div>
          </>
        </Section>

        <Section title='Bebidas'>
          <div ref={sliderRef3} className='keen-slider'>
            {
              !showFav ?
              drinks.map(drink => (
                <Card
                  setOrderItems={setOrderItems} 
                key={drink.id}
                title={drink.name}
                description={drink.description}
                price={drink.price}
                img={drink.image} alt={drink.name}
                removeDish={e => handleRemove(dish.id)}
                handleEdit={e => handleEdit(drink.id)}
                handleDetails={e => handleDetails(drink.id)}
                setFavoriteDishes={setFavoriteDishes}
                favoriteDishes={favoriteDishes}
                id={drink.id}
                />
              ))
              :
              favDrinks.map(drink => (
                <Card
                  setOrderItems={setOrderItems} 
                key={drink.id}
                title={drink.name}
                description={drink.description}
                price={drink.price}
                img={drink.image} alt={drink.name}
                removeDish={e => handleRemove(drink.id)}
                handleEdit={e => handleEdit(drink.id)}
                handleDetails={e => handleDetails(drink.id)}
                setFavoriteDishes={setFavoriteDishes}
                favoriteDishes={favoriteDishes}
                id={drink.id}
                />
              ))
            }
          </div>
          <> 
            <div className={`${showFav && favDrinks.length == 0 || drinks.length ==0 ? "hidden" : ""} container-left`}>
                <Arrow
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef2.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
            </div>

            <div className={`${showFav && favDrinks.length == 0 || drinks.length ==0 ? "hidden" : ""} container-right`}>
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef2.current?.next()
                }
                disabled={
                  currentSlide === - 1
                }
              />
            </div>
          </>

        </Section>

      </main>

      <Footer/>
    </Container>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};