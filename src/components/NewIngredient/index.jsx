import { Container } from "./styles";

import { FiPlus, FiX } from 'react-icons/fi'; 

export function NewIngredient({value, isNew, onChange, onClick, file, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input 
        className="ingredient-input"
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={onChange}
        {...rest}
      />


      <button type='button' onClick={onClick}>
        {isNew ? <FiPlus size={13}/> : <FiX size={15}/>}
      </button>
    </Container>
  );
};