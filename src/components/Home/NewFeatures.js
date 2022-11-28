import styled from 'styled-components';

const FeaturesHeader = styled.h1`
align-self: center;
`;

const LinkFeatures = styled.a`
color: ${(props) => props.theme.foreground};
`;

const LayoutNewFeatures = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
`;

const LayoutList = styled.ul`
align-self: center;
`;

function NewFeatures({theme}) {
	// TODO: montar um esquema disso
	const features = ['automatizar quotes',
					  'adicionar mais exercícios',
					  'permitir download dos textos',
					  'montar nuvem de palavras',
					  'sugestões'];
	return (
			<LayoutNewFeatures theme={theme}>
			<FeaturesHeader theme={theme}>
			Funcionalidades
		</FeaturesHeader>
			<LayoutList>
			{features.map((e) => (
					<li key={e}>
					<LinkFeatures
				theme={theme}
				href="http://www.google.com.br"
					>
					{e}
				</LinkFeatures>
					</li>
			))}
		</LayoutList>
			</LayoutNewFeatures>
	);
	// TODO: colocar uma caixa de sugestões
}

export default NewFeatures;
