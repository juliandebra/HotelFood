import React from 'react';

//Styled Components
import styled from 'styled-components';

const PageNotFound = () => {
  return (
  
  
  <PNFStyle>
      <Title>ERROR 404 PAGE NOT FOUND </Title>
  </PNFStyle>


  )
};

export default PageNotFound;


const PNFStyle = styled.div`
    background-color: #f5f5f5;
    width: 100vw;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#AA0F0F;
`
const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;
    font-size: 2rem;
    color: #fff;
`