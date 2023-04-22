import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";
import Button from "../components/Button";
import WavesSVG from "../components/WavesSVG";
import InputBox from "../components/TextBox";

const InputText = styled.input`
position: relative;
padding: 0.5rem;
flex-grow: 1;
border-radius: 0.4rem;
color: ${props => props.theme.foreground};
background: ${props => props.theme.background_light};
outline: none;
border: none;
`;

const LoginForm = styled.form`
display: flex;
flex-direction: column;
color: ${props => props.theme.foreground};
background: ${props => props.theme.background_dark};
align-self: center;
`;

const LoginBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
color: ${props => props.theme.foreground};
background: ${props => props.theme.background_dark};
align-self: center;
padding: 2rem;
box-shadow: 6px 8px 5px teal;
`;

const LayoutLogin = styled.div`
display: grid;
flex-grow: 1;
grid-template-columns: 1fr 1fr 1fr;
`;

const Header = styled.h2`
align-self: center;
color: ${props => props.theme.foreground};
`;

const Spacer = styled.div`
`;

const Label = styled.label`
align-self: center;
position: relative;
top: 0.5rem;
left: 1rem;
z-index: 1;
color: ${props => props.theme.foreground};
`;

const FormField = styled.div`
display: grid;
margin-bottom: 0.5rem;
`;

const ButtonField = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
`;

const Login: React.FC = (props) => {
	const auth = useContext(AuthContext);
	const [userData, setUserData] = useState({});

	function handleLogin(e) {
		e.preventDefault();
		auth.Login(userData);
	}

	return (
		<ThemeContext.Consumer>
			{theme =>
				<LayoutLogin>
					<WavesSVG />
					<Spacer>
					</Spacer>
					<LoginBox theme={theme}>
						<LoginForm
							id="loginForm"
							theme={theme}
							onSubmit={(e) => handleLogin(e)}
						>
							<Header theme={theme}>
								Login
							</Header>
							<FormField>
								<Label theme={theme}>Usuário</Label>
								<InputText
									theme={theme}
									onChange={(e) =>
										setUserData({
											username: e.target.value,
											password: userData.password
										})}
									type="text"
									value={userData.username}
									name="username"
									required
								/>
							</FormField>
							<FormField>
								<Label theme={theme}>Senha</Label>
								<InputText
									theme={theme}
									onChange={(e) =>
										setUserData({
											username: userData.username,
											password: e.target.value
										})}
									type="password"
									value={userData.password}
									name="password"
									required
								/>
							</FormField>
							<ButtonField>
								<Spacer>
								</Spacer>
								<Button
									id="submitButton"
									onClick={handleLogin}
									theme={theme}>
									Enviar
								</Button>

							</ButtonField>
						</LoginForm>

					</LoginBox>
				</LayoutLogin>
			}
		</ThemeContext.Consumer>
	);
};


export default Login;
