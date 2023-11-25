import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import Button from '../Button';
import ThemeContext from '../../contexts/ThemeContext';
import AuthContext from '../../contexts/AuthContext';

const LayoutConfigsPopup = styled.div`
display: flex;
flex-direction: column;
`;

const SettingField = styled.div`

`;

function ConfigPopupExercise({
  exercise,
  toggleVisibilityFunction,
  theme,
}) {
  const [defaultExercise, setDefaultExercise] = useState(false);
  const [maxTime, setMaxTime] = useState(120);
  const auth = useContext(AuthContext);
  const id = exercise._id;
  function handleClick() {
    // TODO: send configs to api
    if (auth.signed) {
      console.log(id);
    }
    toggleVisibilityFunction();
  }

  return (
    <LayoutConfigsPopup>

      <SettingField>
        Tempo máximo em segundos
        <SetDefaultBox
          value={maxTime}
          onChange={(e) => { setMaxTime(e.target.value); }}
        />
      </SettingField>

      <Button
        onClick={handleClick}
        theme={theme}
      >
        Salvar
      </Button>
    </LayoutConfigsPopup>

  );
}

const SetDefaultBox = styled.input`

`;

export default ConfigPopupExercise;
