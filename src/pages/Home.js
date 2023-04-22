import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import QuoteBox from "../components/Home/QuoteBox";
import ActivityWidget from "../components/Home/ActivityWidget";
import NewFeatures from "../components/Home/NewFeatures";
import Hero from "../components/Home/Hero";
import LoadingSpinner from "../components/LoadingSpinner";
import fetchGetAPI from "../lib/fetchAPI";
import WavesSVG from "../components/WavesSVG";

// TODO: mudar o layout pra ficar responsivo

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

function GreetUser({theme}) {
	const auth = useContext(AuthContext);
	
		return (
			<LayoutGreetUser>
				<UserGreeting
			id="userGreeting"
			theme={theme}
				>
				Que bom te ver de volta, {auth.user.username}!
			</UserGreeting>
				Seu último login foi em {auth.user.last_login}
			<LastExercises />
			</LayoutGreetUser>
		);
};

function UserWidgets({theme}) {
	const auth = useContext(AuthContext);
	if(auth.signed) {
		return (
			<ActivityWidget theme={theme} />
		);
	} else {
		return null;
	}
};


function LastExercises() {
	const auth = useContext(AuthContext);
	const url = "http://192.168.0.100:8000/texts";
	const [texts, setTexts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// TODO: user configs add
		fetchGetAPI(url, setTexts, setLoading);
	}, [loading]);
	
	if (loading) {
		return (
				<LoadingSpinner />
		);
	} else {
		return (
			<div>
				{texts.map((text, index) => {
					return(
						<div>
							{text.contents}
						</div>
					);
			})}
			</div>
		);
	}
};

function Home() {
	const theme = useContext(ThemeContext);
	const auth = useContext(AuthContext);
	if(!auth.signed) {
		return(
			<LayoutLanding>
				<WavesSVG />
				<Hero theme={theme} />
				<HomeImage src="undraw_exams_re_4ios.svg" />
			</LayoutLanding>
		);
	} else {
		return(
			<LayoutHome>
				<GreetUser theme={theme} />
				<QuoteBox theme={theme}>
				</QuoteBox>
				<NewFeatures theme={theme} />
				<UserWidgets theme={theme} />
				</LayoutHome>
		);
	}
};


export default Home;
