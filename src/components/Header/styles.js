import styled from 'styled-components'

export const Container = styled.div`
  grid-area: "header";
  
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  
  .logo a{
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  .top{
    display: none;
  }

  .top .logo a{
    display: block;
  }

  .logout , .links a {
    display: none;
  }

  .links {
    display: flex;
    flex-direction: column;

    text-align: end;
  }

  .links a{
    color: ${({theme}) => theme.COLORS.WHITE}
  }

  .logo a:hover{
    filter: brightness(1);
  }

  .order-button {
    display: none;
  }

  >strong{
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.9rem;
  }

  div:nth-child(1){
    margin-bottom: 2rem;
    justify-content: center;
  }
  
  .icon {
    margin-top: -1rem;
    margin-bottom: 1rem;
    left: 44%;
    width: fit-content;
    height: 5px;
    cursor: pointer;
    position: relative;

    .hamburguer {
      top: 70%;
      left: 10%;
      width: 37px;
      height: 6px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      position: absolute;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }

    .hamburguer::before{
      top: -12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }

    .hamburguer::after{
      top: 12px;
      content: '';
      position: absolute;
      width: 37px;
      height: 6px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_200};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    left: 1%;
    padding-top: 2rem;
    flex-wrap: nowrap;
    
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    
  }

  .hidden{
    display: none;
  }

  .list .listItems {
    padding: 0;
    list-style: none;
  }

  .list .listItems a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 10px;
  }

  .list .listItems li {
    margin: 1.5rem 0;
    padding: 1rem 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED};
    text-align: center;
    border-radius: 10px;
  }

  .list .listItems li:hover {
    opacity: 0.8;
  }

  .icon.iconActive .hamburguer {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
  }

  .icon.iconActive .hamburguer::after {
    top: 0;
    background-color: red;
    transform: rotate(225deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }

  .icon.iconActive .hamburguer::before {
    top: 0;
    background-color: red;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  }

  .menu.menuOpen {
    width: 100%;
  }

  .menu.menuClose {
    display: none;
  }

  @media (min-width: 375px) {
    width: 100%
  }

  @media (min-width: 540px) {
    
    div:nth-child(1){
      margin-bottom: 0;
      justify-content: space-around;
    }

    .search-bar{
      width: 29.8rem;
    }

    .top {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .icon {
      margin-top: 4rem;
    }
  }

  @media (min-width: 768px) {
    .icon{
      margin-top: -40px;
      height: 20px;
    }

    .search-bar{
      min-width: 29.8rem;
    }
  }

  @media (min-width: 980px) {

    .order-button{
      display: block;
    }

    .search-bar{
      max-width: 41rem;
    }

    .logo, .links a, .logout {
      display: block;
    }

    .icon{
      display: none;
    }

    .menu{
      display: none;
    }
  }

  @media (min-width: 1166px) {
    .search-bar{
      width: 50rem;
    }

  @media (min-width: 1280px) {
    padding-right: 12.3rem;
    padding-left: 12.3rem;
  }

  @media (min-width: 1368px) {
    padding-left: 0;
    padding-right: 0;

    .top{
      width: 114rem;
      margin: 0 auto;
    }
  }
  }
`

export const SearchOptions = styled.ul`
  list-style: none;
  position: fixed;
  z-index: 1;
  top: 128px;

  li:first-child{
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  li:last-child{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  >li {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_SEARCH};

    height: 4rem;
    width: 33.5rem;
    

    display: flex;
    align-items: center;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    padding: 3rem;

    z-index: 1;

    >img{
    width: 3rem;
    height: 3rem;

    margin-right: 1rem;
  }

  }

  >li:hover{
    filter: brightness(0.8);
    border-radius: 8px;
    
    cursor: default;
  }

  @media (min-width: 425px){
    li{
      width: 38.5rem;
    }

  @media (min-width: 768px){
    top: auto;

    li{
      width: 29.8rem;
    }
  }

  @media (min-width: 1440px){

    li{
      width: 41rem;
    }
  }
}
`

