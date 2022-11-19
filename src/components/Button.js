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
`;

export default Button;
