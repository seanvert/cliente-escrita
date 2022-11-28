import styled from "styled-components";
import Button from "../Button";

const LayoutHero = styled.div`
min-width: 33vw;
display: flex;
flex-direction: column;
align-content: center;
`;

const HorizontalLine = styled.hr`
color: ${props => props.theme.foreground};
border: solid 1px;
align: right;

`;

const AppNameCaption = styled.h3`
font-family: 'Libre Baskerville', serif;
font-size: 2vw;
margin-top: 0;
`;

const HeroText = styled.div`
text-align: left;

margin-top: 2rem;
margin-bottom: 2rem;
`;

const HeaderAppName = styled.h1`
color: ${props => props.theme.foreground};
font-size: 5vw;
margin-bottom: 0;
`;

const HeaderSpacer = styled.div`
min-height: 0.5rem;
`;

const CallToAction = styled.button`
background-color: #257eff;
border: 0;
border-radius: 1rem;
padding: 1rem;
font-weight: bold;
font-size: 1.5rem;
max-width 30vw;
`;

function HeroHeader ({theme}) {
	return (
			<div>
			<HeaderAppName>
			Escrever é Desvendar o Mundo

		</HeaderAppName>
								<HeaderSpacer />
						<AppNameCaption>
		</AppNameCaption>
			<HorizontalLine theme={theme} />
			</div>
	);
}

function Hero ({theme}) {
	function handleClick() {
		window.location.replace("/Signup");
	}
	
	return (
			<LayoutHero theme={theme}>
			<HeroHeader />
			<HeroText>
			That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity.
			</HeroText>
			<CallToAction
		id="callToAction"
		onClick={handleClick}
		theme={theme}>
			Cadastre-se
			</CallToAction>
			</LayoutHero>
	);
	
}

export default Hero;
