// components/FadingMessages.js
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
//#29292b

const BlackScreen = styled.div`
  background-color: #3f4054;
  background: linear-gradient(to bottom, rgba(63, 64, 84, 1) 79%, rgba(135, 31, 173, 0.8) 100%);
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;



const Welcome = ({ messages, onButtonClick }) => {
    const totalDuration = messages.length + 1;
  return (
    <BlackScreen>
      {messages.map((message, index) => (
        <FadeInDiv key={index} index={index + 1}>
        {message}
        </FadeInDiv>
      ))}
      <FadeInButton totalDuration={totalDuration} onClick={onButtonClick}>
        Ready?
      </FadeInButton>
      
    </BlackScreen>
  );
};

const FadeInDiv = styled.div`
  ${({ index }) => css`
    opacity: 0;
    animation: ${fadeIn} 8s ease ${index}s forwards;
    font-family: 'Gabriola', sans-serif; // Set the desired font-family
    font-size: 50px; // Set the desired font-size
  `}
`;
const fadeInButton = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInButton = styled.button`
  ${({ totalDuration }) => css`
    opacity: 0;
    animation: ${fadeInButton} 1s ease ${totalDuration}s forwards;
    margin-top: 16px; // Adjust the margin as needed
    background-color: #cfd1d4;
    border: none;
    border-radius: 20px; // Set the border-radius for rounded corners
    padding: 5px 40px; // Adjust padding as needed
    transition: 0.3s;
    font-family: 'Gabriola', sans-serif; // Set the desired font-family
    font-size: 30px; // Set the desired font-size
    
    background-color: rgba(207, 209, 212, 0.5); // Adjust the alpha value for transparency

    &:hover {
        background-color: #e8ebed;
    }
  `}

`;

export default Welcome;