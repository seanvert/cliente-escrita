import styled from 'styled-components';

const Button = styled.button`
border: none;
border-radius: 1rem;
align-self: center;
padding: 0.5rem;
max-height: 4rem;
min-height: 2rem;
color: ${(props) => props.theme.foreground};
background: ${(props) => props.theme.highlight};
font-weight: bold;

&:hover {
box-shadow: 0.3rem 0.3rem 0.3rem 0.1rem grey;
transition: all 0.2s ease-in-out;transition: all 0.2s ease-in-out;
}

&:focus {
box-shadow: 0.2rem 0.2rem 0.2rem 0.1rem grey;
filter: brightness(0.9);
transition: all 0.2s ease-in-out;
}
`;

export default Button;
