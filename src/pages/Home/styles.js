import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;

  main{
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 118.5rem;

    margin: 0 auto;
  }

  .banner-content{
    overflow-x: scroll;
    width: 95vw;
    padding-inline: 3.5rem;
    margin-bottom: 6.2rem;

    padding-bottom: 15px;
  }

  .slogan{
    width: 112.0rem;
    height: 26rem;
    margin-top: 16.4rem;
    border-radius: 0.8rem;
    justify-content: flex-end;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    display: flex;
    align-items: center;

    position: relative;

    >img {
      width: max(63.2rem);
      position: absolute;
      bottom: 0;
      left: -5.6rem;
    }
  }

  .banner-description{
    padding-right: 4.6rem;
  }

  .banner-description h3{
    font-weight: 500;
    font-size: 4rem;
    line-height: 140%;
    margin-bottom: 8px;
  }

  .banner-description p{
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 140%;
  }

  .hidden{
    display: none;
  }

  .arrow {
  width: 30px;
  height: 90px;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
  z-index: 1;
}

.arrow--right {
  right: -2.9rem;
}

.arrow--disabled {
  fill: rgba(255, 255, 255, 0.5);
}

.container-left{
  width: 116px;
  height: 43.3rem;
  
  position: absolute;
  top: 3.5rem;
  
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.container-right{
  width: 116px;
  height: 43.3rem;
  
  position: absolute;
  top: 3.5rem;
  
  right: 3.4rem;
}

@media(min-width: 1440px) {
  .banner-content{
    width: 100%;
    margin: 0 auto 6.2rem;
}
}

@media(min-width: 1025px){
  .banner-content::-webkit-scrollbar{
    display: none;
  }
}

@media(min-width: 768px) {
  .container-left, .container-right{
  background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }

  .container-left{
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .arrow--right {
  right: 3.1rem;
}
}
`