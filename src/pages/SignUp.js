import React from 'react';
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";

const Button = styled.button`
border: none;
border-radius: 1rem;
min-height: 2.5rem;
color: ${props => props.theme.foreground};
background: ${props => props.theme.highlight};
font-weight: bold;
`;

const InputTexto = styled.input`
position: relative;
padding: 0.5rem;
flex-grow: 1;
border-radius: 0.4rem;
color: ${props => props.theme.foreground};
background: ${props => props.theme.background_light};
outline: none;
border: none;
`;

const FormSignUp = styled.form`
display: flex;
flex-direction: column;
color: ${props => props.theme.foreground};
background: ${props => props.theme.background_dark};
align-self: center;
padding: 2rem;
border: 1px solid;
box-shadow: 6px 8px 5px teal;
`;

const LayoutSignUp = styled.div`
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

const SignUp: React.FC = (props) => {
	return (
		<ThemeContext.Consumer>
			{theme =>
				<LayoutSignUp>
					<Spacer>
					</Spacer>
					<FormSignUp theme={theme}
								action={process.env.REACT_APP_AUTH_SIGNUP}
								method="post">
						<Header theme={theme}>Sign up</Header>
						
						<FormField>
							<Label theme={theme}>Nome</Label>
							<InputTexto theme={theme}
										required name="name" />
						</FormField>
						
						<FormField>
							<Label theme={theme}>Sobrenome</Label>
							<InputTexto theme={theme}
										required name="last_name" />
						</FormField>
						
						<FormField>
							<Label theme={theme}>Email</Label>
							<InputTexto theme={theme}
										required name="email" />
						</FormField>

						<FormField>
							<Label theme={theme}>Usuário</Label>
							<InputTexto theme={theme}
										required name="username" />
						</FormField>

						<FormField>
							<Label theme={theme}>Senha</Label>
							<InputTexto theme={theme}
										required name="password"
										type="password" />
						</FormField>

						<ButtonField>
							<Spacer>
							</Spacer>
							<Button theme={theme}>Enviar</Button>
						</ButtonField>				
					</FormSignUp>
				</LayoutSignUp>
			}
		</ThemeContext.Consumer>
	);
};

export default SignUp;
