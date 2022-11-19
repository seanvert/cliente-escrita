import { BsSquare, BsSlashSquare } from "react-icons/bs";
import React from "react";
import styled from 'styled-components';

function Icon (props: { completo: bool }) {
	if (props.completo) {
		return <BsSlashSquare />;
	} else {
		return <BsSquare />;
	}
}

const IconStyle = styled.div`
display: flex;
align-items: center;
`;

function CompletionIcon (props) {
	
	return(
		<IconStyle>
			<Icon completo={props.completo}/>
		</IconStyle>
	);
};

export default CompletionIcon;
