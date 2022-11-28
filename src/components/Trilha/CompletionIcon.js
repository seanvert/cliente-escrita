import { BsSquare, BsSlashSquare } from "react-icons/bs";
import React from "react";
import styled from 'styled-components';

function Icon (props: { completo: bool }) {
	if (props.completed) {
		return <BsSlashSquare />;
	} else {
		return <BsSquare />;
	}
}

const IconStyle = styled.div`
display: flex;
align-items: center;
`;

function CompletionIcon ({completed}) {
	
	return(
		<IconStyle>
			<Icon completed={completed}/>
		</IconStyle>
	);
};

export default CompletionIcon;
