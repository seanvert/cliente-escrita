import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";
import ConfigPopupExercise from "./ConfigPopupExercise";


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

	
	function toggleConfigsView() {
		if (configsVisible) {
			setConfigsVisible(false);
		} else {
			setConfigsVisible(true);
		}
	}
	

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
					<Button theme={theme}>
						Pular
					</Button>
					<Button
						onClick={toggleConfigsView}
						theme={theme}>
						Configurações
					</Button>
				</ControlsDetailedView>
				{configsView(theme)}
				<ExerciseDescription>
					{current.contents}
				</ExerciseDescription>
			</div>
		);
	}
}

export default DetailedView;
