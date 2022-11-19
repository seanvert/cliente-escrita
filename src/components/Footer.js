import React from "react"
import styled from "styled-components";

const FooterStyle = styled.div`
text-align: center;
margin-top: 1vh;
font-size: 9pt;
`;

const Footer: React.FC = (props) => {
    return (
		<FooterStyle>
			Logotipo por <a href="https://www.freepik.com/free-vector/flat-graphic-designer-logo-pack_11855642.htm#query=pen%20logo&position=12&from_view=search&track=sph">Freepik</a>
			<br/>
			Escrita app
		</FooterStyle>
    );
}
export default Footer
