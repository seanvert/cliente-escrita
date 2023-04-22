import styled from "styled-components";

const LayoutWavesSVG = styled.div`
min-width: 100vw;
position: absolute;
top: 0;
z-index: 0;
`;

const WavesImage = styled.img`
color: ${(props) => props.theme.background}
`;

function WavesSVG ({theme}) {
	return (
		<LayoutWavesSVG>
			<WavesImage theme={theme} src="wavesOpacity.svg" />
			</LayoutWavesSVG>
	);
};

export default WavesSVG
