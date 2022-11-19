import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeContext from "../../contexts/ThemeContext";
import CompletionIcon from "./CompletionIcon";
import Button from "../Button";
import DetailedView from "./DetailedView";

const NomeAtividades = styled.h3`
color: ${props => props.theme.foreground};
text-align: center;
`;

const BotaoMostrarEsconderAtividade = styled.button`
border-width: 1px;
min-height: 2rem;
align-self: center;
background: none;
font-weight: bold;
`;


const ItemAtividades = styled.div`
border-radius: 2rem;
align-items: start;
background-color: ${props => props.theme.background};
margin-bottom: 2rem;
border: 1px solid;
`;


const ControlesAtividade = styled.div`
display: grid;
grid-template-columns: 1fr 10fr 1fr 1fr;
grid-gap: 2rem;
padding-left: 2rem;
padding-right: 2rem;
`;


function ExerciseCard (exercise: Exercise) {
	const [visible, setVisible] = useState(false);

	var current = exercise.exercise;
	// componente com os items de cada atividade
	// TODO colocar fotos
	// TODO colocar alguma marcação se a atividade já foi feita
	// TODO colocar alguma marcação para mostrar algum tipo de maestria
	function changeVisibility() {
		if (visible) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	}


	function nomeBotao(visibilityState: bool) {
		if (!visibilityState) {
			return "Expandir";
		} else {
			return "Esconder";
		}
	};

	
	return (
		<ThemeContext.Consumer>
			{theme =>
				<ItemAtividades theme={theme}>
					<ControlesAtividade>
							<CompletionIcon completo={false} />
						<NomeAtividades theme={theme}>
							{current.name}
						</NomeAtividades>
						<Button theme={theme}>
							Começar
						</Button>
						<BotaoMostrarEsconderAtividade
							onClick={changeVisibility}>
							{nomeBotao(visible)}
						</BotaoMostrarEsconderAtividade>
					</ControlesAtividade>
					<DetailedView visible={visible}
								  theme={theme}
								  current={current} />
				</ItemAtividades>
			}
		</ThemeContext.Consumer>
	);
}

export default ExerciseCard;
