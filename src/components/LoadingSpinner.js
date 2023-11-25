import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;
const SpinnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;

`;

// TODO: fix this min max thing
const SpinnerLayout = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-width: 50px;
max-width: 50px;
min-height: 50px;
max-height: 50px;
align-self: center;
padding: none;
margin: none;
border-radius: 50%;
border: 10px solid ${(props) => props.theme.foreground};
border-top: 10px solid rgba(0, 0, 0, 0.0);
animation: ${spinner} 1.5s linear infinite;
`;

function LoadingSpinner({ theme }) {
  return (
    <SpinnerContainer>
      <SpinnerLayout theme={theme} />
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
