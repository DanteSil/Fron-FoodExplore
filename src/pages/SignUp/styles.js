import styled from "styled-components";

export const Container = styled.div`
padding-inline: 1rem;

height: 100vh;


  .logo{
    display: flex;
    align-items: center;

    margin: 5rem 0 10rem;

    gap: 1.9rem;

    justify-content: center;

    >img{
      width: 3.9rem;
      height: 3.9rem;
    }

    >p{
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 5rem;

      color: #FFFFFF;
    }
  }

  form{
    justify-self: center;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    padding: 2.4rem;

    gap: 3.2rem;

    border-radius: 1.6rem;

    >h2{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 2.4rem;

      color: #FFFFFF;

      width: 34.8rem;

      text-align: center;
    }

    .input-wrapper{
      display: flex;
      flex-direction: column;
      width: 100%;

      >label{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }

      >input{
        border: 1px solid #fff;
        border-radius: 5px;

        background-color: transparent;

        height: 4.8rem;

        padding: 1.4rem 1.6rem;

        color: #fff;
      }
    }

    >a{
      color: #fff;
    }

  }

  @media(min-width: 768px){
    padding-inline: 20rem;
  }

  @media(min-width: 1024px){
    padding-inline: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .logo{
      justify-self: center;
      align-self: center;

      margin: 0;
      margin-bottom: 3rem;

      >img{
        width: 4.9rem;
        height: 4.9rem;
      }

      >p{
      font-size: 4.9rem;
    }
    }

    form{
      padding: 6.4rem;
    }
  }
`