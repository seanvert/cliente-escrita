import styled from 'styled-components';
import { useCallback, useState } from 'react';

const Input = styled.textarea`
resize: none;
background-color: ${(props) => props.theme.background_light};
color: ${(props) => props.theme.foreground};
border-radius: 0.3rem;
border-width: 1px;
font-family: 'Libre Baskerville', serif;
font-size: 2rem;
border-color: ${(props) => props.theme.foreground};
width: auto;
flex-grow: 1;
text-align: justify;
padding: 2rem;
margin: 1rem;


&:focus {
outline: none
}
`;

const Form = styled.form`
flex-grow: 1;
display: flex;
`;

function TextBox({
	theme,
	onChangeFunction,
	submit
}) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    onChangeFunction(e);
  }

  return (
    <Form
      theme={theme}
      id="textBox"
      action={process.env.REACT_APP_DB_HOST_TEXTS}
      method="post"

    >
      <Input
        theme={theme}
        placeholder="Escreva aqui"
        autoFocus
        name="conteudo"
        value={text}
      onChange={(e) => {
		  handleChange(e);
	  }} />
    </Form>
  );
}

export default TextBox;
