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

    th:first-child {
      border-top-left-radius: 8px;
    }
    th:last-child {
      border-top-right-radius: 8px;
    }

    .Pendente{
      width: 8px;
      height: 8px;
      border-radius: 50%;

      display: inline-flex;
      margin-right: 8px;

      background-color: #AB222E;
    }
    
    .Preparando{
      width: 8px;
      height: 8px;
      border-radius: 50%;

      display: inline-flex;
      margin-right: 8px;

      background-color: #FBA94C;
    }
    
    .Entregue{
      width: 8px;
      height: 8px;
      border-radius: 50%;

      display: inline-flex;
      margin-right: 8px;

      background-color: #04D361;
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