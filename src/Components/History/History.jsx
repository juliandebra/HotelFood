import React from 'react';

//react-router-dom
import { useNavigate } from 'react-router-dom';

//styled Components
import styled from 'styled-components'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const History = (props) => {

    const navigate = useNavigate();

  return(
    <HistoryStyle>

      <TitleSection>
        <Title>
            <FontAwesomeIcon icon={faChevronLeft} style={{paddingRight: '100px', cursor: 'pointer'}} onClick={() => navigate('/Home')} />
            HISTORY
        </Title>
      </TitleSection>

        <HistorySection>
            <h1>This section is under construction.</h1>
        </HistorySection>

    </HistoryStyle>
  )
};

export default History;

const HistoryStyle = styled.div`
    background-color: #f5f5f5;  
    width: 100vw;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 2px solid #b9b9b9;
`

const TitleSection = styled.div`
    display: flex;
    height: 50px;
    width: 100vw;
    justify-content: space-between;
`
const Title = styled.h1`
    width: 300px;
    height: 50px;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 30px;
    padding-right: 70px;
    background: #e63030;
    color: #fff;
    box-shadow: 5px 7px 10px #881c1c;
` 
const HistorySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin-top: 40px;
`
