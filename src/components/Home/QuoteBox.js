import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";
import LoadingSpinner from "../LoadingSpinner";
import fetchGetAPI from "../../lib/fetchAPI";

const Quote = styled.blockquote`
margin: 0px;
text-align: justify;
color: white;
padding: 2rem;
font-size: 1.5rem;
font-family: 'Libre Baskerville', serif;
`;


// TODO: arrumar um quote que preste sobre escrita
const LayoutQuote = styled.div`
display: grid;
background-color: black;
min-height: 70vh;
grid-template-columns: 3fr 1fr;
grid-template-rows: 1fr;
border: 1px solid;
`;

const QuoteBlurBox = styled.div`
box-shadow: inset 10px 10px 10rem 0px black;

z-index: 2;
`;

const LayoutQuoteFigure = styled.div`
display: flex;
box-shadow: 10vh 0px 20vh -2vw black;
z-index: 2;
margin: none;
`;

const QuoteFigure = styled.figure`
display: flex;
align-self: center;
flex-direction: column;
margin: 0;
width: 100%;
z-index: 2;
`;

const FigCaption = styled.figcaption`
color: white;
text-align: end;
padding-right: 2rem;
z-index: 2;
`;

function QuoteFigureCaption({theme}) {
	return (
			<FigCaption>
			&mdash; Jeremy Keith,
		{' '}
			<cite>Mental models</cite>
			</FigCaption>
	);
}

const AuthorPortraitImage = styled.img`
align-self: center;
height: 100%;
z-index: 1;
`;

const AuthorPortraitImageBackground = styled.div`
background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Clarice_Lispector_%28cropped%29.jpg/200px-Clarice_Lispector_%28cropped%29.jpg");
background-size: 100% auto;
background-repeat: no-repeat;
align-self: center;
height: 100%;
width: 100%;
z-index: 1;
`;

const LayoutAuthorPortrait = styled.div`
display: flex;
justify-content: center;
`;

			// <AuthorPortraitImageBackground>
			// </AuthorPortraitImageBackground>
function AuthorPortrait({author}) {
	
	return(
			<LayoutAuthorPortrait>
			
			<AuthorPortraitImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Clarice_Lispector_%28cropped%29.jpg/200px-Clarice_Lispector_%28cropped%29.jpg" />

			</LayoutAuthorPortrait>
	);
};

function QuoteBox({theme}) {
	const [loading, setLoading] = useState(true);
	const url = "http://192.168.0.100:8000/quotes";
	const [quote, setQuote] = useState({});

	useEffect(() => {
		fetchGetAPI(url, setQuote, setLoading);
	}, [loading]);

	if (loading) {
		// TODO: trocar isto para uma caixa do mesmo estilo da quote
		return (
			<LoadingSpinner />
		);
	} else {
		return (
				<LayoutQuote theme={theme}>
				
				<LayoutQuoteFigure>
				
				<QuoteFigure theme={theme}>
				
				<Quote theme={theme}>
				{quote.quote}
			</Quote>
				
				<QuoteFigureCaption
			theme={theme}
			source={quote.source}
				/>
				</QuoteFigure>
				
				</LayoutQuoteFigure>
				
			<AuthorPortrait />

				</LayoutQuote>
		);
	}
}

export default QuoteBox;
