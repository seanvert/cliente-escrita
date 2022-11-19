import React from 'react';
import styled from 'styled-components';
import ThemeContext from "../contexts/ThemeContext";
import ExerciseCard from "../components/Trilha/ExerciseCard";
/* tela que vai seguir basicamente a organização do livro */
/* mostrar o progresso nas atividades */
// acho que faz algum sentido fazer algo semelhante ao duolingo

interface Exercise {
	name: String,
	contents: String,
}

// FIXME isto daqui vai sair da API
const atividades = [
	{
		name: "escrita automática",
		contents: "stub da descri~ao da atividade.",
	},
	{
		name: "associaqwerqwerção livre",
	},
	{
		name: "fluxo verbalasd",
	},
	{
		name: "mais coisasasd",
	},
	{
		name: "mais outra coisasdasda",
	},
	{
		name: "associação liasdsavre",
	},
	{
		name: "fluxo vasderbal",
	},
	{
		name: "mais casdasdoisas",
	},
	{
		name: "mais outasdasdsadra coisa",
	},
];


const LayoutTrilha = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
padding-left: 4rem;
padding-right: 4rem;
padding-top: 1rem;

`;

function Trilha () {
	// componente com a visão geral da página
	return (
		<ThemeContext.Consumer>
			{theme => 
				<LayoutTrilha theme={theme} id="organizacaoTrilha">
					{atividades.map((atividade, index) =>
						<ExerciseCard key={atividade.name}
									   exercise={atividade} />)}
				</LayoutTrilha>
			}
		</ThemeContext.Consumer>
	);
};

export default Trilha;

