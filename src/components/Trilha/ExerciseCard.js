import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from "../../contexts/ThemeContext";
import CompletionIcon from "./CompletionIcon";
import StartButton from './StartButton';
import DetailedView from "./DetailedView";
import AuthContext from "../../contexts/AuthContext";
import fetchGetAPI from "../../lib/fetchAPI";
import Popup from "../Popup";

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
	const [exerciseText, setExerciseText] = useState();
	const [visiblePopup, setVisiblePopup] = useState(false);
	var current = exercise;
	const [exerciseInstructions, setExerciseInstructions] = useState('teste');

	useEffect(() => {
	}, [loading])
	
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
			if (!exerciseText) {
				const currentExerciseId = current._id;
				const url = process.env.REACT_APP_DB_HOST_EXERCISES + `/${currentExerciseId}`;
				fetchGetAPI(url, setExerciseText, setLoading);
			} else {
				// se ele estiver definido, não faz request
			}
			return "Esconder";
		}
	};

	function handleStart () {
		sessionStorage.setItem('currentExercise', exerciseText);
		setVisiblePopup(true);
	};

	// redireciona pro escrita e manda as informações do exercício

	// props.index índice do vetor do usuário
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
						<Popup text={exerciseInstructions} visible={visiblePopup} setVisible={setVisiblePopup} />
						<StartButton theme={theme} disabled={loading} onClick={handleStart} />

						<ButtonToggleDescription
							id="toggleDescriptionButton"
							onClick={changeVisibility}>
							{buttonName(visible)}
						</ButtonToggleDescription>
						
					</ExerciseControls>
					
					<DetailedView
						visible={visible}
						theme={theme}
						current={current}
						exerciseInstructions={exerciseInstructions}
						setExerciseInstructions={setExerciseInstructions} />
				</ItemExercises>
			}
		</ThemeContext.Consumer>
	);
}

export default ExerciseCard;
