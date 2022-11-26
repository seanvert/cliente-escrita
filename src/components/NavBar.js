import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";

const NavStyle = styled.div`
color: ${props => props.theme.highlight};
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
min-height: 10vh;
padding-left: 2vw;
padding-right: 2vw;
padding-top: 1vh;
padding-bottom: 1vh;
border-radius: 4rem;
`;

const Spacer = styled.div`
flex-grow: 1;
`;

const LinkStyle = styled(Link)`
text-decoration: none;
align-self: center;
text-align: center;
padding: 0.5rem;
color: ${props => props.theme.foreground};
&:visited {
text-decoration: none;
}

&:hover {
background-color: ${props => props.theme.highlight};
border: 1px solid;
}`;

const LogoStyle = styled.img`
max-height: 6vh;
min-width: 4vw;
`;

const LoginLogoutBar = styled.div`
color: ${props => props.theme.highlight};
display: grid;
grid-template-columns: 1fr 1fr;
min-height: 10vh;
`;

const Navbar: React.FC = (props) => {
	const auth = useContext(AuthContext);

	function loginLogoutBar (auth, theme) {
		if (!auth.signed) {
			return(
				<LoginLogoutBar>
					<LinkStyle theme={theme} to="/login">Login
				</LinkStyle>
					</LoginLogoutBar>
			);
		} else {
			return (
				<LoginLogoutBar>
					<LinkStyle
				onClick={auth.Logout}
				theme={theme}
				to="/">Logout
				</LinkStyle>
					</LoginLogoutBar>
			);
		}
	}
    return (
			<ThemeContext.Consumer>
			{theme => 
					<NavStyle theme={theme}>
					<LinkStyle theme={theme} to="/">
					Home
				</LinkStyle>
					
					<LinkStyle theme={theme} to="/trilha">
					Trilha
				</LinkStyle>
					
					<Spacer>
					</Spacer>
					
					<LinkStyle theme={theme} to="/escrita">
					<LogoStyle src="logotipo.svg" />
					</LinkStyle>
					
					<Spacer>
					</Spacer>
					
					{loginLogoutBar(auth, theme)}
				</NavStyle>
			}
		</ThemeContext.Consumer>
    );
};

export default Navbar;
