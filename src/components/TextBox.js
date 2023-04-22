import styled from 'styled-components';
import React from 'react';

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  border-bottom: 2px solid #ccc;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0px 0px 2px #0077ff;
  }

  &:focus ~ label {
    top: -1rem;
    font-size: 1rem;
    color: #0077ff;
  }
`;

const Label = styled.label`
  position: absolute;
  top: calc(50% - 0.5rem);
  left: 0.5rem;
  font-size: ${(props) => (props.active ? '1rem' : '1.5rem')};
  color: ${(props) => (props.active ? '#0077ff' : '#ccc')};
  pointer-events: none;
`;

function InputBox({ label }) {
  const [active, setActive] = React.useState(false);

  return (
    <InputContainer>
      <Input
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        type="text"
        id="input"
      />
      <Label htmlFor="input" active={active}>
        {label}
      </Label>
    </InputContainer>
  );
}

export default InputBox;
