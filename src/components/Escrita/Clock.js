import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { FaRegClock } from 'react-icons/fa';

const LayoutClock = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

interface Time {
	time: number,
	active: bool,
	submit: (void) => {},
}

function Clock ({time, active, submit}: Tempo) {
	const [timeRemaining, setTimeRemaining] = useState(10);
	
	useEffect(() => {
		if (active && timeRemaining > 0) {
			const timerID = setInterval(
				() => {setTimeRemaining(timeRemaining - 1);},
				1000);
			return () => { clearInterval(timerID); };
		} else if (timeRemaining === 0) {
			return submit();
		}
	}, [timeRemaining, active, submit]);
	
	if (active){
		return (
			<LayoutClock>
				{timeRemaining}
				<FaRegClock />
			</LayoutClock>
		);
	}
}

export default Clock;
