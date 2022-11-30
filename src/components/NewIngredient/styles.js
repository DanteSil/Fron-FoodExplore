import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  max-width: ${({isNew}) => isNew ? '150px' : '170px'};

  padding-right: 16px;
  border-radius: 8px;

  background: ${({ isNew }) => isNew ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};

  border: ${({ isNew }) => isNew ? '1px dashed #7C7C8A' : 'none'} ;

  .ingredient-input{
    all: unset;
    padding: 1.2rem 1.6rem;

    width: ${({ isNew }) => isNew ? '100%' : '100%'} ;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
  }

  .img-input{
    label{
      cursor: pointer;
      margin-right: 10px;
    }
  }

  button{
    background: none;
    border: none;

    display: flex;

    svg{
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : '#FFF'};
    }
  }
`