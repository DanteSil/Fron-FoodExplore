import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;

  main{
    flex: 1;
    width: 36rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
      
      margin: 3.4rem 0 2rem;
    };

    .Order-Items{
      height: 413px;
      overflow-y: auto;

      padding-right: 2rem;
    };

    .Order-Items::-webkit-scrollbar-thumb{
      background-color: ${({theme}) => theme.COLORS.GRAY_300};

      width: 8px;
      border-radius: 8px;
    };

    .Order-Items::-webkit-scrollbar{
      width: 8px;
    };

    .total{
      margin-top: 2rem;
      
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 160%;
    };

    .payment-method button{
      padding: 2.3rem 8.9rem;
      background: transparent;
      color: #fff;
      border: none;
      border: 1px solid rgba(255, 255, 255, 0.1);

      width: 140px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    };

    .payment-method button:hover{
      background: rgba(255, 255, 255, 0.05);
      filter: unset; 
    };

    .payment-method button:disabled{
      cursor: not-allowed;
      background: none;
      :hover{
        background: none;
      }
    };

    .botton-left{
      border-radius: 8px 0px 0px 0px;
    };

    .payment-method{
      display: flex;
    };

    .payment-section .selected{
      background: rgba(255, 255, 255, 0.05);
    };

    .paymentPix {
      border: 1px solid rgba(255, 255, 255, 0.1);

      padding: 3rem 5.7rem;

      margin-bottom: 2rem;
    };

    .paymentPix .Code-Img{
      margin-bottom: 4rem;
    };

    .paymentCard{
      border: 1px solid rgba(255, 255, 255, 0.1);

      padding: 4.8rem 1rem;
    };

    .paymentCard section {
      margin-bottom: 1.6rem;
    };

    .waitingPayment, .paymentFinished{
      border: 1px solid rgba(255, 255, 255, 0.1);

      padding: 5.9rem 9.1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      color: ${({ theme }) => theme.COLORS.GRAY_300};

      >p{
        margin-top: 4.9rem;
      }

    };

    .cardData{
      display: flex;
      flex-direction: column;
    };

    .cardData input{
      border: 1px solid #FFFFFF;
      border-radius: 5px;
      background: transparent;

      margin-top: 8px;

      padding: 1.6rem 1.4rem;

      margin-bottom: 2rem;

      color: #fff;
    };

    .card-Validity{
      display: flex;
      gap: 1.7rem;
    };

    .card-Validity .cardData{
      width: 47.5%;
    };

    .hidden{
      display: none;
    };
  };


  @media(min-width: 1024px) {
    main{
      width: 98rem;
      flex-direction: row;
      margin: 0 auto;

      gap: 11.9rem;

      .payment-method button{
        width: 100%;
      }

      .paymentPix .Code-Img{
        display: flex;
        justify-content: center;
      }

      .paymentCard{
        padding: 4.8rem 9.1rem;
      }

      .payment-content{
        width: 50.3rem;
      }
    }
  }

  @media(min-width: 1440px){
    main{
      width: 111.5rem;
      gap: 25rem;
    }
  }
`