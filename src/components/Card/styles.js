import styled from "styled-components";

export const Container = styled.div`
  .card-content{
    height: 51.2rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(0, 0, 0, 0.32);

    border: 1px solid rgba(0, 0, 0, 0.65);
    border-radius: 8px;


  .favorite{
    position: absolute;
    top: 2.1rem;
    right: 2.1rem;

    background: none;
    border: none;
    
    color: #D9D9D9;

    height: 2.1rem;
    width: 2.1rem;

    >button{
      background: none;
    }
  }

  .favorite:hover{
    cursor: pointer;
    color: ${({isAdmin}) => isAdmin ? "" : "red" };
    
    >svg{
      fill: ${({isAdmin}) => isAdmin ? "" : "red" };
    }
  }

  .selected{
    color: ${({isAdmin}) => isAdmin ? "" : "red" };
    svg{
      fill: ${({isAdmin}) => isAdmin ? "" : "red" };
    }
  }

  >img{
    width: 17.6rem;
    height: 17.6rem;

    margin: 5.6rem 0 1.6rem;
  }

  a{
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 140%;

    margin-bottom: 1.8rem;

    margin: 0 auto;
  }

  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    text-align: center;

    max-width: 22rem;

    margin-bottom: 1.6rem;
  }

  .price{
    margin-bottom: 1.8rem;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 160%;

    color: #82F3FF;
  }

  .card-footer{
    display: flex;
    gap: 1.9rem;
    align-items: center;
    
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

  .add-button{
    height: 4.8rem;
    width: 9.2rem;
    border: none;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    color: #fff;
  }
  }
`