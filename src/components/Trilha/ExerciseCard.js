import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from "../../contexts/ThemeContext";
import CompletionIcon from "./CompletionIcon";
import Button from "../Button";
import DetailedView from "./DetailedView";
import AuthContext from "../../contexts/AuthContext";
import fetchGetAPI from "../../lib/fetchAPI";

const ExerciseName = styled.h3`
color: ${props => props.theme.foreground};
text-align: center;
`;

const ButtonToggleDescription = styled.button`
border-width: 1px;
min-height: 2rem;
align-self: center;
background: none;
font-weight: bold;
`;


const ItemExercises = styled.div`
border-radius: 2rem;
align-items: start;
background-color: ${props => props.theme.background};
margin-bottom: 2rem;
border: 1px solid;
`;


const ExerciseControls = styled.div`
display: grid;
grid-template-columns: 1fr 10fr 1fr 1fr;
grid-gap: 2rem;
padding-left: 2rem;
padding-right: 2rem;
`;

const ExerciseInstructions = styled.div`
border-radius: 2rem;
display: flex;
background-color: ${props => props.theme.background};
margin-bottom: 2rem;
border: 1px solid;
`;


function ExerciseCard ({key, index, exercise}: Exercise) {
	const auth = useContext(AuthContext);
	const user = auth.user;
	// description box visibity state
	const [visible, setVisible] = useState(false);
	// loading state whenever the user clicks to start an exercise
	const [loading, setLoading] = useState(true);
	const [exercises, setExercises] = useState();
	var current = exercise;
	
	function changeVisibility() {
		if (visible) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	}


	function buttonName(visibilityState: bool) {
		if (!visible) {
			return "Expandir";
		} else {
			return "Esconder";
		}
	};

	function handleStart () {
		// TODO: stub da função que começa o exercício
		const url = process.env.REACT_APP_DB_HOST_EXERCISES;
		// TODO: stub da request que vou mandar na api pra fazer exercicios
		fetchGetAPI(url, setExercises, setLoading);
		// TODO: recebe um redirect para a tela da escrita,
		// manda as instruções do exercício
		
	};
	// TODO: useEffect loading do exercise
	// set to false
	// TODO: função que vai dentro do useEffect
	// redireciona pro escrita e manda as informações do exercício


	// props.index índice ddo vetor do usuário
	// user.configs[props.index].config.completed
	return (
		<ThemeContext.Consumer>
			{theme =>
				<ItemExercises
					theme={theme}>
					<ExerciseControls>
						
						<CompletionIcon
							completed={current.defaultExercise} />
						
						<ExerciseName
							theme={theme}>
							{current.name}
						</ExerciseName>
						
						<Button
							onClick={handleStart}
							theme={theme}>
							Começar
						</Button>
						
						<ButtonToggleDescription
							id="toggleDescriptionButton"
							onClick={changeVisibility}>
							{buttonName(visible)}
						</ButtonToggleDescription>
						
					</ExerciseControls>
					
					<DetailedView
						visible={visible}
						theme={theme}
						current={current} />
				</ItemExercises>
			}
		</ThemeContext.Consumer>
	);
}

export default ExerciseCard;
