import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";

const LayoutNavBar = styled.div`
color: ${props => props.theme.highlight};
display: flex;
flex-directon: row;
min-height: 10vh;
padding-left: 2vw;
padding-right: 2vw;
padding-top: 1vh;
padding-bottom: 1vh;
border-radius: 4rem;
z-index: 1;
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
box-shadow: 0.3rem 0.3rem 0.3rem 0.1rem grey;
transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;
}

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
	const theme = useContext(ThemeContext);
	
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
				>Logout
				</LinkStyle>
					</LoginLogoutBar>
			);
		}
	};

	function renderNavBarLoginRoutes (auth, theme) {
		if (auth.signed) {
			return (
					<LinkStyle theme={theme} to="/trilha">
					Trilha
				</LinkStyle>
			);
		} else {
			return null;
		}
	};

	function navBarLogoAuthRoute (auth, theme) {
		if (auth.signed) {
			return(
				<LinkStyle theme={theme} to="/escrita">
				<LogoStyle src="logotipo.svg" />
					</LinkStyle>
			);
		} else {
			return(
				<LinkStyle theme={theme} to="/">
				<LogoStyle src="logotipo.svg" />
					</LinkStyle>
			);
		}
	};
	
    return (
					<LayoutNavBar theme={theme}>
					<LinkStyle theme={theme} to="/">
					Home
				</LinkStyle>
					{renderNavBarLoginRoutes(auth, theme)}

					
					<Spacer>
					</Spacer>
					
				{navBarLogoAuthRoute(auth, theme)}
					
					<Spacer>
					</Spacer>
					
					{loginLogoutBar(auth, theme)}
				</LayoutNavBar>
    );
};

export default Navbar;
