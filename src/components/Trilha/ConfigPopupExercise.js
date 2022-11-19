import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Button from '../Button';
import ThemeContext from '../../contexts/ThemeContext';

const LayoutConfigsPopup = styled.div`
display: flex;
flex-direction: column;
`;

const SettingField = styled.div`

`;

function ConfigPopupExercise(props) {
  const [defaultExercise, setDefaultExercise] = useState(false);
  const [maxTime, setMaxTime] = useState(120);

  function handleClick() {
    // TODO: send configs to api

    props.toggleVisibilityFunction();
  }

  useEffect(() => {

  }, []);

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <LayoutConfigsPopup>
          <SettingField>
            Definir como padrão
            <SetDefaultBox
              type="checkbox"
              checked={defaultExercise}
              onClick={() => setDefaultExercise(!defaultExercise)}
            />
          </SettingField>

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
            salvar
          </Button>
        </LayoutConfigsPopup>
      )}
    </ThemeContext.Consumer>
  );
}

const SetDefaultBox = styled.input`

`;

export default ConfigPopupExercise;
