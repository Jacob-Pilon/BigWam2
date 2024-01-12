// components/Timeline.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TimelineItem from './components/TimelineItem';

const bottomUpSweep = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Timeline = ({ photos, backgroundColor }) => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  const handleHover = (month) => {
    setHoveredMonth(month);
  };

  return (
    <TimelineContainer backgroundColor={backgroundColor}>
      <MonthTag>{hoveredMonth}</MonthTag>
      <CenterWrapper>
        <TimelineWrapper>
          {photos.map((photo, index) => (
            <TimelineItem key={index} photo={photo} onHover={handleHover} />
          ))}
        </TimelineWrapper>
      </CenterWrapper>
    </TimelineContainer>
  );
};

const TimelineContainer = styled.div`
  position: relative;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(to top, rgba(63, 64, 84, 1) 79%, rgba(135, 31, 173, 0.8) 100%);
  height: 100vh;
`;

const MonthTag = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: bold;
  color:  rgba(63, 64, 84, 0.7);
  z-index: 1;
  font-family: 'Gabriola', sans-serif;
  transition: opacity 2s ease;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TimelineWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
  padding-top: 25px;
  padding-left: 25px;
  animation: ${bottomUpSweep} 2.5s ease;

  /* Set the width to show only 5 images at a time */
  width:  1800px; /* Adjust the width as needed */
  height: 50%;
  margin: 0 20px;
  box-sizing: content-box;

  /* WebKit-based browsers */
  &::-webkit-scrollbar {
    height: 10px; /* Set the height of the scrollbar */
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2); /* Faded white background of the track */
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5); /* Faded black color of the thumb */
    border-radius: 4px; /* Rounded corners of the thumb */
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.8); /* Darker black color of the thumb on hover */
  }
`;

export default Timeline;
