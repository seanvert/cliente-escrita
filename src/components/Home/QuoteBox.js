import styled from 'styled-components';
import { useState, useEffect, useContext } from "react";

const Quote = styled.blockquote`
margin: 0px;
text-align: justify;
color: white;
padding: 2rem;
font-family: 'Libre Baskerville', serif;
`;


// TODO: arrumar um quote que preste sobre escrita
const LayoutQuote = styled.div`
display: grid;
background-image: url("https://images6.fanpop.com/image/photos/37200000/Blink-Clarice-Ferguson-Wallpaper-x-men-37207678-1920-1080.jpg");
background-size: 100%;
min-height: 70vh;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
border: 1px solid;
`;

const QuoteFigure = styled.figure`
display: flex;
flex-direction: column;
margin: 0;
width: 100%;
background-color: rgba(60, 60, 60, 0.75);
`;

const FigCaption = styled.figcaption`
color: white;
text-align: end;
padding-right: 2rem;
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

function QuoteBox({theme}) {
	const [loading, setLoading] = useState(true);
	const url = "http://192.168.0.100:8000/quotes";
	const [quote, setQuote] = useState({});
	const headersreq = {'Content-Type': 'application/x-www-form-urlencoded',
						'Upgrade-Insecure-Requests': '1',};

	useEffect(() => {
		// TODO: user configs add 
		var api = fetch(url, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: headersreq,
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		})
			.then((response) => 
				response.json())
			.then((body) => {
				setQuote(body.response);
				setLoading(false);
			});

	}, [loading]);

	if (loading) {
		// TODO: trocar isto para uma caixa do mesmo estilo da quote
		return (
				<h1>Carregando...</h1>
		);
	} else {
		return (
				<LayoutQuote theme={theme}>
				<QuoteFigure theme={theme}>
				<Quote theme={theme}>
				{quote.quote}
			</Quote>
				<QuoteFigureCaption
			theme={theme}
			source={quote.source}
				/>

			</QuoteFigure>
				</LayoutQuote>
		);
	}
}

export default QuoteBox;
