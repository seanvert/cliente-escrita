import React, { useEffect, useState, useCallback } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import Clock from "../components/Escrita/Clock";
import TextBox from "../components/Escrita/TextBox";

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
							  // TODO
							  /* parâmetros: texto a ser avaliado
								 funcaoValidadora função que checa as palavras,
								 elas trocam conforme mudam as atividades */
							  // retorna a pontuação
							  return 1;
						  }

// TODO montar o dot env com as API keys 
// TODO: pensar em alguma função externa para calcular a pontuação, 

interface ContagemDePalavras {
	contagem: number
}

function CaixaContadorDePalavras(props: ContagemDePalavras) {
	return (
		<p><FaPencilAlt /> {props.contagem}</p>
	);
}


const LayoutAtividade = styled.div`
display: flex;
width: 100vw;
flex-direction: column;
padding-right: 4rem;
padding-left: 4rem;
`;


function CaixaTextoAtividade(props: object) {
	const [ativo, setAtivo] = useState(false);
	const handleSubmit = useCallback(
		() => {
			document.getElementById("atividade").submit();
		},
		[],
	);
	useEffect(() => {
	}, [ativo]);

	function onChange(e) {
		setAtivo(true);
	}
	
	return(
		<LayoutAtividade theme={props.theme} id="telaAtividade">
			<TextBox theme={props.theme}
					 onChangeFunction={onChange}
					 handleSubmit={handleSubmit}
			/>
			<Clock
				theme={props.theme}
				ativo={ativo} envia={handleSubmit}/>
		</LayoutAtividade>
	);
}


function Atividade() {
	return (
		<ThemeContext.Consumer>
			{theme => 
				<CaixaTextoAtividade theme={theme} />
			}
		</ThemeContext.Consumer>
	);
}

const Escrita: React.FC = (props) => {
    return (
		<Atividade />
    );
}

export default Escrita;
