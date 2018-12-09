import React from "react";
import styled from "styled-components";
import "./LoaderCheck.css";

const LoaderCheck = props => {
  return (
    <div className="loader-main">
      <div className="loader-circle">
        <div className="loader-bar-background" />
        <span className="check-1" />
        <span className="check-2" />
      </div>
    </div>
  );
};

// const LoaderCheck = styled(LoaderCheckBase)`
//   @keyframes loaderAni {
//     from {
//       width: 0%;
//     }
//     to {
//       width: 100%;
//     }
//   }

//   width: 100vw;
//   height: 100vh;
//   background: ${({ backgroundColor }) => backgroundColor};
//   z-index: 3000;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .loader-circle {
//     border: 3px solid transparent;
//     border-radius: 50%;
//     width: 150px;
//     height: 150px;
//   }

//   .loader-bar-background {
//     width: 150px;
//     border: 1px solid ${({ loaderBorder }) => loaderBorder};
//     background: ${({ loaderBackground }) => loaderBackground};
//     height: 5px;
//     position: relative;
//   }

//   .loader-bar {
//     position: absolute;
//     top: 41.6%;
//     left: 40%;
//     z-index: 2000;
//     background: purple;
//     width: 150px;
//     height: 5px;
//     animation: loaderAni
//   }

//   .loaded {
//     border: 3px solid ${({ checkColor }) => checkColor};
//   }
// `;

export default LoaderCheck;
