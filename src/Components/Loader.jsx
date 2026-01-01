import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="loader-box">
          <svg
            viewBox="0 0 187.3 93.7"
            className="svgbox"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF3CAC" />
                <stop offset="50%" stopColor="#784BA0" />
                <stop offset="100%" stopColor="#2B86C5" />
              </linearGradient>
            </defs>
            <path
              className="outline"
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
            <path
              className="main-path"
              stroke="url(#gradient)"
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            />
          </svg>
          <p className="loading-text">Loading Assets...</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0f172a; /* Dark Elegant Background */
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .svgbox {
    width: 250px;
    height: auto;
    filter: drop-shadow(0 0 15px rgba(120, 75, 160, 0.4));
  }

  path {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
  }

  .outline {
    stroke: rgba(255, 255, 255, 0.05);
  }

  .main-path {
    stroke-dasharray: 150, 400;
    stroke-dashoffset: 0;
    animation: dash 2s ease-in-out infinite;
  }

  .loading-text {
    color: white;
    font-family: 'Inter', sans-serif;
    letter-spacing: 4px;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    animation: pulse 1.5s ease-in-out infinite;
    opacity: 0.6;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -550;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;

export default Loader;