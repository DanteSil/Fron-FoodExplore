import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
  
  main{
    flex: 1;
    max-width: 111rem;
    padding-inline: 3rem;
  }

  main h1{
    margin-top: 3.4rem;
  }

  .content {
    max-width: 100%;
    overflow-x: scroll;
    margin-top: 3.5rem;
  }

  .content::-webkit-scrollbar {
    display: none;
  }

  table{
    width: 100%;
    border-spacing: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    th:first-child {
      border-top-left-radius: 8px;
    }
    th:last-child {
      border-top-right-radius: 8px;
    }
    
    th{
      padding: 2.1rem 2.4rem;

      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 160%;
    }

    td {
      padding: 1.6rem 2.4rem;

      font-family: 'Roboto';
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }

    td img{
      margin-right: 8px;

    }

    th, td {
      border: 2px solid #192227;
      
      text-align: center;
    }
    
    >tbody .select-col{
      width: 20rem;
    }
  }

  @media(min-width:768px) {
  main{
    padding-inline: 5rem;
  }

  table{
    th, td {
        text-align: left;
      }
  }
  }

  @media(min-width:768px) {
    main{
      padding-inline: 2.9rem;
    }
  }

  @media(min-width:1440px) {
    main{
      width: 130.5rem;
      padding: 0;
      margin: 0 auto;
    }
  }
`

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  > span {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    
    position: absolute;
    left: 1.6rem;
  }
  .Pendente {
    background: red;
  }
  .Preparando {
    background: yellow;
  }
  .Entregue {
    background: #04D361;
  }
  select {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.3rem 1.6rem 1.3rem 3.2rem;
    color: white;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;

    min-width: 50px;

    appearance: none;
    -webkit-appearance: none;
    @media (min-width: 768px) {
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 10L12 14L16 10' stroke='%239C98A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: right 1rem top 50%;
    }
  };
`