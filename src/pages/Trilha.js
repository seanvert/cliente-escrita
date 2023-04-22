import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from "../contexts/ThemeContext";
import ExerciseCard from "../components/Trilha/ExerciseCard";
import AuthContext from "../contexts/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import fetchGetAPI from "../lib/fetchAPI.js";

/* tela que vai seguir basicamente a organização do livro */
/* mostrar o progresso nas atividades */
// acho que faz algum sentido fazer algo semelhante ao duolingo

interface Exercise {
	name: String,
	contents: String,
}


const LayoutTrilha = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
padding-left: 4rem;
padding-right: 4rem;
padding-top: 1rem;
`;

function Trilha () {
	const [loading, setLoading] = useState(true);
	const exerciseID = '';
	const [exercises, setExercises] = useState([]);
	const auth = useContext(AuthContext);
	const url = "http://192.168.0.100:8000/exercises";

	useEffect(() => {
		fetchGetAPI(url, setExercises, setLoading);
		// TODO: user configs add 
	}, [loading]);

	if (loading) {
		return (
			<LoadingSpinner />
		);
	} else {

		return (
			<ThemeContext.Consumer>
				{theme => 
					<LayoutTrilha theme={theme} id="organizacaoTrilha">
						{exercises.map((exercise, index) => {
							return <ExerciseCard
									   key={exercise._id}
									   index={index}
									   exercise={exercise} />
						})}
					</LayoutTrilha>
				}
			</ThemeContext.Consumer>
		);
	}
	
};

export default Trilha;
