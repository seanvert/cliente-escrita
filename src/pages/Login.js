
import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import AuthContext from "../contexts/AuthContext";

const Button = styled.button`
border: none;
border-radius: 1rem;
min-height: 2.5rem;
color: ${props => props.theme.foreground};
background: ${props => props.theme.highlight};
font-weight: bold;
`;

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
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const data = {
		username: username,
		password: password,
	};
	function handleLogin(e) {
		e.preventDefault();
		// fetch
		auth.Login(data);
	}

	useEffect(() => {
		data.username = username;
		data.password = password;
	}, [username, password]);

	return (
		<ThemeContext.Consumer>
			{theme =>
				<LayoutLogin>
					<Spacer>
					</Spacer>
					<LoginBox theme={theme}>
						<LoginForm
							id="loginForm"
				theme={theme}
				onSubmit={(e) => handleLogin(e)}
							action={process.env.REACT_APP_AUTH_LOGIN}
				method="post"
					>

							<Header theme={theme}>
								Login
							</Header>
							<FormField>
								<Label theme={theme}>Usuário</Label>
								<InputText
									theme={theme}
									onChange={(e) => setUsername(e.target.value)}
									type="text"
									value={username}
									name="username"
									required
								/>
							</FormField>
							<FormField>
								<Label theme={theme}>Senha</Label>
								<InputText
									theme={theme}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									value={password}
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
