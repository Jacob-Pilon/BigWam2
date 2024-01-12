// components/TimelineItem.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TimelineItem = ({ photo, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(photo.month);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ItemContainer>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleItemClick}
        isHovered={isHovered}
      >
        <img src={process.env.PUBLIC_URL + photo.url} alt={`Photo taken on ${photo.date}`} />
      </ImageContainer>
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent>
            <ModalImageContainer>
              <img src={photo.url} alt={`Photo taken on ${photo.date}`} />
            </ModalImageContainer>
            <ModalInfoContainer>
              <DateTag>{photo.date}</DateTag>
              <Description>{photo.description}</Description>
            </ModalInfoContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  overflow: hidden;
  width: 350px; /* Set the desired width */
  height: 450px; /* Set the desired height */

  &:hover {
    transform: scale(1.1);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
    display: block;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  background: linear-gradient(to top, rgba(63, 64, 84, 1) 45%, rgba(135, 31, 173, 1) 100%); /* White background for the modal content */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  margin-right: 20px;
  display: block;
  

  img {
    max-width: 100%; /* Ensures the image doesn't exceed the container width */
    max-height: 800px; /* Set the maximum height as needed */
    object-fit: contain; /* Maintains aspect ratio and fits the image within the container */
    display: block;
  }
`;

const ModalInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-text: center;
  
`;

const DateTag = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.div`
  color: White;
`;

export default TimelineItem;
