import React, { useState, useEffect } from "react";
import Button from "../Button";
import styled from "styled-components";
import ConfigPopupExercise from "./ConfigPopupExercise";
import fetchGetAPI from "../../lib/fetchAPI";

const ExerciseDescription = styled.div`
flex-grow: 1;
padding: 2rem;
text-align: justify;
`;


const ControlsDetailedView = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 4fr;
grid-gap: 2rem;
padding-left: 1rem;
`;


function DetailedView({
	visible,
	theme,
	current
}) {
	const [configsVisible, setConfigsVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	const [exerciseInstructions, setExerciseInstructions] = useState();
	
	function toggleConfigsView() {
		if (configsVisible) {
			setConfigsVisible(false);
		} else {
			setConfigsVisible(true);
		}
	}

	useEffect(() => {
		const url = process.env.REACT_APP_DB_HOST_EXERCISES;
		fetchGetAPI(url + "/" + current._id,
					setExerciseInstructions,
					setLoading);
		console.log("exercise", exerciseInstructions);
	}, [loading]);

	function configsView(theme) {


		if(configsVisible) {
			return (
					<ConfigPopupExercise
				exercise={current}
				toggleVisibilityFunction={toggleConfigsView}
				theme={theme} />
			);
		}
	};

	
	if (visible) {
		return (
			<div>
				<ControlsDetailedView>
					<Button
						onClick={toggleConfigsView}
						theme={theme}>
						Configurações
					</Button>
				</ControlsDetailedView>
				{configsView(theme)}
				<ExerciseDescription>
					{current.contents}
					<p>-----------------</p>
					{exerciseInstructions.description}
				</ExerciseDescription>
			</div>
		);
	}
}

export default DetailedView;
