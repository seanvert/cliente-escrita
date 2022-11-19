import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeContext from "../../contexts/ThemeContext";
import CompletionIcon from "./CompletionIcon";
import Button from "../Button";
import DetailedView from "./DetailedView";

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


function ExerciseCard (exercise: Exercise) {
	const [visible, setVisible] = useState(false);

	var current = exercise.exercise;
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

	
	return (
		<ThemeContext.Consumer>
			{theme =>
				<ItemExercises theme={theme}>
					<ExerciseControls>
							<CompletionIcon completed={false} />
						<ExerciseName theme={theme}>
							{current.name}
						</ExerciseName>
						<Button theme={theme}>
							Começar
						</Button>
						<ButtonToggleDescription
							onClick={changeVisibility}>
							{buttonName(visible)}
						</ButtonToggleDescription>
					</ExerciseControls>
					<DetailedView visible={visible}
								  theme={theme}
								  current={current} />
				</ItemExercises>
			}
		</ThemeContext.Consumer>
	);
}

export default ExerciseCard;
