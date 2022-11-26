import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import QuoteBox from "../components/Home/QuoteBox";
import ActivityWidget from "../components/Home/ActivityWidget";
import NewFeatures from "../components/Home/NewFeatures";
import Hero from "../components/Home/Hero";


// TODO: mudar o layout pra ficar responsivo
// deixar as colunas pra 3 2 e 1
const LayoutHome = styled.div`
width: 100vw;
padding-left: 3rem;
padding-right: 3rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;

`;

const LayoutLanding = styled.div`
width: 100vw;
padding-left: 3rem;
padding-right: 3rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;

`;

const HomeImage = styled.img`
max-width: 40vw;
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
	} else {
		return null;
	}
}


function Home() {
	const theme = useContext(ThemeContext);
	const auth = useContext(AuthContext);
	if(!auth.signed) {
		return(
				<LayoutLanding>
				<Hero theme={theme} />
				<HomeImage src="undraw_exams_re_4ios.svg" />
			</LayoutLanding>
		);
	} else {
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
}


export default Home;
