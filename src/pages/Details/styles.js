import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  width: 100%;

  grid-template-rows: 11rem auto 7.7rem;

  main{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 31.5rem;
  }

  main section{
    width: 100%;

    .quantity{
      display: flex;

      gap: 1.7rem;

      button{
        background: none;
        display: flex;
        align-items: center;
        border: none;
      }
    }
  }

  .text h1{
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;

    text-align: center;

    margin-top: 2rem;
  }

  .text p{
    font-family: 'Poppins';

    font-weight: 400;
    font-size: 2.1rem;
    line-height: 140%;
    text-align: justify;

    margin: 2.3rem auto 0;

    width: 30.5rem;
  }

  .item-image img{ 
    width: 25rem;
    margin-top: 5rem;
  }

  .ingredients{
    margin: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 2rem;
    grid-column-gap: 5rem;
  }

  .price{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;

    margin-bottom: 3rem;
  }

  .price span{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 160%;

    color: #82F3FF;
  }

  .order-button2{
    width: 301px;
    margin: 0 auto;
    display: flex;
  }

  @media(min-width: 768px) {
    main{
      width: 80%;
    }

  .item-image img{ 
    width: 35rem;
    height: 35rem;
  }

  .text h1{
    font-size: 4.5rem;
  }

  .ingredients{
    margin-right: 0;
    margin-left: 0;
    display: flex;
    justify-content: center;
  }

  .text p{
    font-size: 2.7rem;
    width: unset;
  }

  .price{
    margin: 0 auto 2rem;
    width: 358px;
  }

  .price span{
    font-size: 3rem;
  }
  }

  @media(min-width: 1024px) {
    width: 117rem;
    main{
      width: 64rem;
    }

    .ingredients{
      display: flex;
      justify-content: center;
    }

    .price{
      width: 374px;
      margin: 0 auto 2rem;
    }
  }

  @media(min-width: 1372px) {
    width: 100vw;

    main{
      flex-direction: row;
      width: 114rem;
      gap: 5rem;
      margin-top: 10rem;
    }

    .item-image img{ 
      width: 44rem;
    height: 44rem;
      margin-top: 0;
    }

    .text p{
      font-size: 2.4rem;
    }

    .text h1{
      text-align: start;
      font-size: 4rem;
    }

    .description{
      width: 55.7rem;
      margin-top: 0rem;
    }

    .ingredients{
      margin: 0;
      margin-top: 3.2rem;

      display: flex;
      justify-content: flex-start;
      gap: 2.1rem;
    }

    section{
      margin-top: 4.7rem;
      display: flex;
      align-items: baseline;
    }

    section .price{
      gap: 5.7rem;
      margin-right: 3.4rem;
      margin-left: 0;

      justify-content: space-between;
    }

    .order-button2{
      width: 9.2rem;
      margin: 0;
    }
  }
`