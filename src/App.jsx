import './App.css';
import { Link } from 'react-router-dom';
import first_page from './images/first_page.png';
import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
width:75rem;
    height:100%;
  background-image: url(${first_page});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 0.5rem;
`;

const H3 = styled.h3`
  margin-top:27%;
`;

const ExploreLink = styled(Link)`
  margin-bottom:37%;
  text-decoration: none;
  font-size: larger;
  font-weight: bolder;
  color: purple;
  &:hover {
        border: 1px solid purple;
  }
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const MainDiv = styled.div`
    height:100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/**
 * 
 * App is the default antry page for the web site. App contains a Link to "/toplayer" from which can be visited to toplayer page
 */

function App() {

  return (
    <>
      <MainDiv>
        <ContainerDiv>
          <H3>Welcome to our Site!</H3>
          <ExploreLink to="/toplayer" name="explore">Explore</ExploreLink>
        </ContainerDiv>
      </MainDiv>      
    </>
  );
}

export default App
