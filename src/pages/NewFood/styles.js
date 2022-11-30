import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  main{
    flex: 1;

    width: 113.5rem;

    margin: 0 auto;

    input[type="file"] {
      display: none;
    }

    input{
      color: ${({ theme }) => theme.COLORS.WHITE};

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }

    a{
      display: flex;
      align-items: center;

      margin-top: 3.2rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      font-weight: 500;
      font-size: 2.4rem;
      line-height: 140%;
    }

    h1{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;

      margin-top: 2.4rem;
    }

    form{
      margin-top: 3.2rem;

      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      input {
        padding: 1.6rem 1.4rem;

        border: 1px solid #fff;
        border-radius: 5px;

        background: none;

        width: 100%;
      }

      #food-price{
        background: none;
        border: none;

        padding-left: 6px;
      }

      .category-wrapper{
        width: 143px;
        align-self: end;
      }

      select{
        height: 56px;
        width: 143px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 1.3rem 1.6rem 1.3rem 3.2rem;
        color: white;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0.5rem;

        appearance: none;
        -webkit-appearance: none;
        @media (min-width: 768px) {
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
          background-repeat: no-repeat;
          background-position: right 1rem top 50%;
        }
      }

      .price-wrapper{
        display: flex;
        align-items: center;

        height: 5rem;

        padding: 1.6rem 1.4rem;

        border: 1px solid #fff;
        border-radius: 5px;

        background: none;

        width: 100%;

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.6REM;
        line-height: 100%;

        span{
          color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
      }

      .area-wrapper{
        display: flex;

        gap: 3.2rem;

        align-items: center;
      }

      .file-wrapper{
        display: flex;
        label{
          padding: 1.2rem 3.2rem;

          border: 1px solid #fff;
          border-radius: 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          min-width: 261px; 
        }
      }

      .file-wrapper:hover{
        label{
          cursor: pointer;
        }
      }

      .name-wrapper{
        width: 74%;
      }

      .ingredient-wrapper{
        width: 80%;
      }

      #food-ingredient{
        display: flex;
        gap: 1.6rem;

        padding: 8px;

        border: 1px solid #fff;
        border-radius: 5px;

        background: none;
      }

      #food-description{
        height: 17.2rem;
        padding: 1.4rem;

        border: 1px solid #fff;
        border-radius: 5px;

        resize: none;

        background: none;
        color: ${({ theme }) => theme.COLORS.WHITE};

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .add-food{
        background: rgba(255, 255, 255, 0.1);
        color: #fff;

        border: 1px solid #fff;
        border-radius: 5px;

        height: 4.8rem;
        width: 37.5rem;

        align-self: end;
      }
    }
}
`