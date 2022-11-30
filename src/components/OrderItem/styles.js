import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  gap: 1.3rem;

  margin-top: 3.2rem;

  p{
    font-weight: 500;
    font-size: 2rem;
    line-height: 160%;
  }

  span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  button{
    background: none;
    border: none;
    color: #AB4D55;
  }

  >img{
    width: 7.2rem;
    height: 7.2rem;
  }

  @media(min-width: 375px){
    display: flex;
  }
`