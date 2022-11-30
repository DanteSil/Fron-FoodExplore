import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;

  margin-top: 10.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  .bottom{
    width: 100%;
    height: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  a{
    color: rgba(255, 255, 255, 0.3);;
  }

  >span{
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  @media(min-width:768px) {
    .bottom{
      flex-direction: row;
      justify-content: space-around;
    }
  }

  @media(min-width:1024px) {
    .bottom{
      flex-direction: row;
      justify-content: space-between;
      padding: 3rem;
    }
  }

  @media(min-width:1440px) {
    .bottom{
      width: 114rem;
      margin: 0 auto;
      padding-inline: unset;
    }
  }
`