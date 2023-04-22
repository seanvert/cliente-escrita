import React from "react";
import styled, {keyframes} from 'styled-components';

const spinner = keyframes`
from {
    transform: rotate(0deg);
}

to {
    transform: rotate(360deg);
}
`;

// TODO: fix this min max thing
const SpinnerLayout = styled.div`
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

function LoadingSpinner ({theme}) {
	return(
			<SpinnerLayout theme={theme}>
			</SpinnerLayout>
	);
};

export default LoadingSpinner;
