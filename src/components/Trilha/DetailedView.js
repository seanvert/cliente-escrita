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


function DetailedView(props: {
	// visible: bool,
	// theme: ,
	// contents: ,
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
				exercise={props.current}
				toggleVisibilityFunction={toggleConfigsView}
				theme={props.theme} />
			);
		}
	};

	
	if (props.visible) {
		return (
			<div>
				<ControlsDetailedView>
					<Button theme={props.theme}>
						Pular
					</Button>
					<Button
						onClick={toggleConfigsView}
						theme={props.theme}>
						Configurações
					</Button>
				</ControlsDetailedView>
				{configsView(props.theme)}
				<ExerciseDescription>
					{props.current.contents}
				</ExerciseDescription>
			</div>
		);
	}
}

export default DetailedView;
