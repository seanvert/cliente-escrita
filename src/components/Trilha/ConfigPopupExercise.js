import styled from 'styled-components';
import { useState, useContext } from 'react';
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
	theme
}) {
	const [defaultExercise, setDefaultExercise] = useState(false);
	const [maxTime, setMaxTime] = useState(120);
	const auth = useContext(AuthContext);
	// TODO: get an exercise id
	const id = exercise._id;
	function handleClick() {
		// TODO: send configs to api
		if (auth.signed) {
			console.log(id);
		}
		toggleVisibilityFunction();
	}

				// 	<SettingField>
				// 	Definir como padrão
				// 	<SetDefaultBox
				// type="checkbox"
				// checked={exercise.defaultExercise}
				// onClick={() => setDefaultExercise(!defaultExercise)}
				// 	/>
				// 	</SettingField>
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
