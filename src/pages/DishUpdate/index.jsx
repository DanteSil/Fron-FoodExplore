import { Container } from "./styles";

import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {NewIngredient} from '../../components/NewIngredient';

import { api } from '../../service/api';

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function DishUpdate(){
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [foodCategory, setFoodCategory] = useState('principal');
  const [dishImage, setDishImage] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

  const params = useParams();

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient('');
  };
  
  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted));
  };
  
  function handleFoodImg(event) {
    const file = event.target.files[0];
    setDishImage(file);
  };

  function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o prato?");
    if(confirm){
      api.delete(`/dishes/${params.id}`);
    };
    navigate("/");
  };
  
  function handleEditFood(){
    if(!name || !price || !description){
      return alert("O prato precisa de nome, descrição, imagem e preço.");
    };

    const fileData = new FormData();

    if(dishImage){
      fileData.append("dishImg", dishImage);
    };
  
    fileData.append("data", JSON.stringify({
      name,
      description,
      price,
      foodCategory,
      ingredients
    }));

    try {
      api.put(`/dishes/${params.id}`, fileData);

      alert("prato atualizado.");
      navigate('/') ;
    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("não foi possível cadastrar o prato!");
      };
    };
  };

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      const { name, description, foodCategory, price, ingredients } = response.data;
      setName(name);
      setDescription(description);
      setFoodCategory(foodCategory);
      setPrice(price);
      setIngredients(ingredients.map(ingredient => ingredient.name));
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <a href="/"><IoIosArrowBack size={32} /> voltar</a>
        <h1>Editar prato</h1>

        <form>
          <div className="area-wrapper">
            <div className="input-wrapper file-wrapper">
              <span>Imagem do prato</span>
              <label htmlFor="food-img"><MdOutlineFileUpload size={30}/> Selecionar imagem </label>
              <input 
                type="file" 
                name="food-img" 
                id="food-img"
                onChange={handleFoodImg}
              />
            </div>
            <div className="input-wrapper category-wrapper">
              <label htmlFor="category">Categoria</label>
              <select onChange={e => setFoodCategory(e.target.value)} name='category' id="category">
                <option value="principal">Principal</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>

            <div className="input-wrapper name-wrapper">
              <label htmlFor="food-name">Nome do prato</label>
              <input 
                type="text" 
                name="food-name" 
                id="food-name" 
                placeholder={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

          </div>

          <div className="area-wrapper">

            <div className="input-wrapper ingredient-wrapper">
              <label htmlFor="food-ingredient">Ingredientes</label>
              <div id="food-ingredient"> 
                
                {
                  ingredients.map((ingredient, index) => (
                    <NewIngredient 
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    /> 
                  ))
                }

                <NewIngredient 
                  isNew
                  placeholder="Adicionar" 
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                  value={newIngredient}
                /> 
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="food-price">Preço</label>
              <div className="price-wrapper">
                <span>R$</span>
                <input 
                  type="text" 
                  name="food-price" 
                  id="food-price" 
                  placeholder={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </div>
            
          </div>

          <div className="input-wrapper">
            <label htmlFor="food-description">Descrição</label>
            <textarea 
              type="textarea" 
              name="food-description" 
              id="food-description" 
              placeholder={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          
          <div className="btn-footer">
            <button onClick={handleRemove} className="add-food">Excluir prato</button>
            <button onClick={handleEditFood} className="add-food">Atualizar prato</button>
          </div>
        </form>
      </main>

      <Footer />
    </Container>
  )
}