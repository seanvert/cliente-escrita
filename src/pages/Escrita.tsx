import React, { useEffect, useState, useCallback } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import Clock from "../components/Escrita/Clock";
import TextBox from "../components/Escrita/TextBox";
import Popup from '../components/Popup';

// TODO: com opção para esconder o contador
// TODO: colocar alguma coisa para mostrar palavras da atividade
// TODO: ver alguma maneira da caixa de texto sempre estar com o foco do 
// teclado enquanto a aba estiver ativa
// TODO: opção para tirar o backspace e o delete

export function inteiroAleatorio(min: number, max: number): number {
	// [min, max[ 
	// max is exclusive and min is inclusive
	var minimo = Math.ceil(min);
	var maximo = Math.floor(max);
	var r_int = Math.floor(Math.random() * (maximo - minimo) + minimo);
	return r_int;
}

function contaPalavras(texto: string): number {
	return texto.split(/\s+/).length;
}

function calculaPontuacao(texto: string, 
						  funcaoValidadora: (arg0: string) => number): number {
							  // TODO: inicialmente vou fazer só uma contagem de palavras
							  // mas imagino que seria interessante somar algumas coisa
							  // ou até dar alguma liberdade para o usuário escolher o que 
							  // vai entrar na pontuacao
							  /* parâmetros: texto a ser avaliado
								 funcaoValidadora função que checa as palavras,
								 elas trocam conforme mudam as atividades */
							  // retorna a pontuação
							  return 1;
						  } 

interface ContagemDePalavras {
	contagem: number
}

function CaixaContadorDePalavras(props: ContagemDePalavras) {
	return (
		<p><FaPencilAlt /> {props.contagem}</p>
	);
}


const LayoutExercise = styled.div`
display: flex;
width: 100vw;
flex-direction: column;
padding-right: 4rem;
padding-left: 4rem;
`;


function ExerciseScreenTextBox(props: object) {
	const [active, setActive] = useState(false);
	
	const handleSubmit = useCallback(
		() => {
			document.getElementById("textBox").submit();
		},
		[],
	);
	
	useEffect(() => {
	}, [active]);

	function onChange(e) {
		setActive(true);
	}
	
	return(
		<LayoutExercise theme={props.theme} id="exerciseScreen">
			<TextBox theme={props.theme}
					 onChangeFunction={onChange}
					 submit={handleSubmit}
			/>
			<Clock
				theme={props.theme}
				active={active} submit={handleSubmit}/>
		</LayoutExercise>
	);
};


function Exercise() {
	return (
		<ThemeContext.Consumer>
			{theme => 
				<ExerciseScreenTextBox theme={theme} />
			}
		</ThemeContext.Consumer>
	);
};

// TODO: renderizar o popup toda a vez que for algum exercício diferente
// TODO: recuperar o enunciado do browser com o currentExercise no sessionStorage

const Escrita: React.FC = (props) => {
    return (
		<Exercise />
    );
};

export default Escrita;
