import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaRegClock } from 'react-icons/fa';

const RelogioStyle = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

interface Tempo {
	tempo: number,
	ativo: bool,
	envia: (void) => {},
}

function Clock ({tempo, ativo, envia}: Tempo) {
	const [tempoRestante, defineTempoRestante] = useState(10);
	
	useEffect(() => {
		if (ativo && tempoRestante > 0) {
			const timerID = setInterval(
				() => {defineTempoRestante(tempoRestante - 1);},
				1000);
			return () => { clearInterval(timerID); };
		} else if (tempoRestante === 0) {
			return envia();
		}
	}, [tempoRestante, ativo, envia]);
	
	if (ativo){
		return (
			<RelogioStyle>
				{tempoRestante}
				<FaRegClock />
			</RelogioStyle>
		);
	}
}

export default Clock;
