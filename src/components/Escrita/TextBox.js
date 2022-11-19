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

function TextBox(props) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
    props.onChangeFunction(e);
  }

  return (
    <Form
      theme={props.theme}
      id="atividade"
      action={process.env.REACT_APP_DB_HOST_TEXTS}
      method="post"
      onSubmit={props.handleSubmit}
    >
      <Input
        theme={props.theme}
        placeholder="Escreva aqui"
        autoFocus
        name="conteudo"
        value={text}
        onChange={(e) => { handleChange(e); }}
      />
    </Form>
  );
}

export default TextBox;
