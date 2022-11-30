import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  display: flex;
  max-width: 48rem;
  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_SEARCH};
  
  border-radius: 5px;

  >input {
    background: transparent;
    border: none;
    padding: 1.6rem;

    width: 100%;
    height: 4.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  >svg{
    margin-left: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`