import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;

  animation-name: ${props => (props.isPreloaderHidding ? 'fadeOut' : 'none')};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background-color: blue;

  border-radius: 100%;
  animation: sk-scaleout 1s infinite ease-in-out;

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Preloader = ({ isPreloaderHidding }) => (
  <StyledDiv isPreloaderHidding={isPreloaderHidding}>
    <Spinner />
  </StyledDiv>
);

Preloader.propTypes = {
  isPreloaderHidding: PropTypes.bool.isRequired,
};

export default Preloader;
