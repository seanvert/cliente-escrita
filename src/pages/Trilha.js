import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from "../contexts/ThemeContext";
import ExerciseCard from "../components/Trilha/ExerciseCard";
import AuthContext from "../contexts/AuthContext";

/* tela que vai seguir basicamente a organização do livro */
/* mostrar o progresso nas atividades */
// acho que faz algum sentido fazer algo semelhante ao duolingo

interface Exercise {
	name: String,
	contents: String,
}

// FIXME isto daqui vai sair da API

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

	const headersreq = {'Content-Type': 'application/x-www-form-urlencoded',
						'Upgrade-Insecure-Requests': '1',};

	useEffect(() => {
		// TODO: user configs add 
		var api = fetch(url, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: headersreq,
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		})
			.then((response) => 
				response.json())
			.then((body) => {
				setExercises(body.response);
				setLoading(false);
			});

	}, [loading]);

	if (loading) {
		return (
			<h1>Carregando...</h1>
		);
	} else {

		return (
			<ThemeContext.Consumer>
				{theme => 
					<LayoutTrilha theme={theme} id="organizacaoTrilha">
						{exercises.map((exercise, index) => {

							if (auth.signed) {
								// TODO: isso daqui vai pro backend
								// auth.user.config[index] = {
								// 	exercise: atividade._id,
								// 	config: {
								// 		completed: false,
								// 		time: atividade.defaultConfigs.time,
								// 		default: false,
								// 	}
								// };
							}
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

