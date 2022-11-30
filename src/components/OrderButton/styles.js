import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;

  height: 5.6rem;
  width: 100%;
  padding: 1.6rem 3.6rem;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 24px;
  font-family: 'poppins';

  gap: 1.1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
  color: #fff;

  border: none;
  border-radius: 5px;
  
  .hidden{
    display: none;
  }

  :disabled{
    cursor: not-allowed;
  }
`