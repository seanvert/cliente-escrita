import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";

const Contents = styled.div`
flex-grow: 1;
display: flex;
width: 100vw;
`;

const linearGradient = (color1, color2) => {
	// This function take TWO colors as String in any CSS
	// valid format and returns a CSS background gradient String
	return "linear-gradient(360deg, " +
		color1 + " 35%, " +
		color2 + " 100%)";
};

const AppStyle = styled.div`
display: flex;
height: 100vh;
width: 100vw;
flex-direction: column;
background: ${props => linearGradient(props.theme.background,
 props.theme.background_light)};
overflow-y: scroll;
`;

const Main: React.FC<{ title: string; children: React.ReactNode }> = (props) => {
    return (
		<ThemeContext.Consumer>
			{theme => 
				<AppStyle theme={theme}>
	    			<Header />
					<Contents id="content">
						<Outlet />
					</Contents>
					<Footer />
				</AppStyle>
			}
		</ThemeContext.Consumer>
    );
}

export default Main;
