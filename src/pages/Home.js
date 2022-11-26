import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import QuoteBox from "../components/Home/QuoteBox";
import ActivityWidget from "../components/Home/ActivityWidget";
import NewFeatures from "../components/Home/NewFeatures";

// TODO: mudar o layout pra ficar responsivo
// deixar as colunas pra 3 2 e 1
const LayoutHome = styled.div`
width: 100vw;
padding-left: 2rem;
padding-right: 2rem;
display: grid;
grid-templates-rows: repeat(2, 1fr);
grid-template-columns: 2fr 3fr 2fr;
grid-gap: 1rem;
`;

const Banner = styled.div`
border-radius: 2rem;
background-color: red;
`;

interface quoteapi {
	quote: String,
	source: {
		author: {
			name: String,
			wikipediaLink: String,
			portrait: String,
		},
		work: {
			name: String,
			bookstoreLink: String,
		},
	},
	
};


const UserGreeting = styled.h3`
color: ${props => props.theme.foreground};
align-self: center;
`;

const LayoutGreetUser = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
`;

function GreetUser(props) {
	const auth = useContext(AuthContext);
	
	if (auth.signed) {
		return (
			<LayoutGreetUser>
				<UserGreeting
					theme={props.theme}
				>
					Que bom te ver de volta, {auth.user.username}!
				</UserGreeting>
				Seu último login foi em {auth.user.last_login}
			</LayoutGreetUser>
		);
	} else {
		return (
			<LayoutGreetUser>
				<h1>ola</h1>
			</LayoutGreetUser>
		);
	}
}

function UserWidgets(props) {
	const auth = useContext(AuthContext);
	if(auth.signed) {
		return (
			<ActivityWidget theme={props.theme} />
		);
	}
}

function Home() {
	const auth = useContext(AuthContext);
	const theme = useContext(ThemeContext);
	function fetchHome(auth) {
		
	}
	
	return(
		<LayoutHome>
			<GreetUser theme={theme} />
			<QuoteBox theme={theme}>
			    But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
			</QuoteBox>
			<NewFeatures theme={theme} />
			<UserWidgets theme={theme} />
		</LayoutHome>
	);
}

export default Home;
