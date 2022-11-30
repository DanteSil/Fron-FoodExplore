import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

justify-self: center;

  >img{
    width: 6rem;
    height: 6rem;
  }

  >span{
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 140%;
  }

  @media (min-width: 1372px) {
    justify-self: start;
  }
`