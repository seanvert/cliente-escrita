import styled from 'styled-components';

const Quote = styled.blockquote`
margin: 0px;
text-align: justify;
color: white;
padding: 2rem;
font-family: 'Libre Baskerville', serif;
`;

const LayoutQuote = styled.div`
display: grid;
background-image: url("https://images6.fanpop.com/image/photos/37200000/Blink-Clarice-Ferguson-Wallpaper-x-men-37207678-1920-1080.jpg");
background-size: 100%;
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

function QuoteFigureCaption(props) {
  return (
    <FigCaption>
      &mdash; Jeremy Keith,
      {' '}
      <cite>Mental models</cite>
    </FigCaption>
  );
}

function QuoteBox(props) {
  return (
    <LayoutQuote theme={props.theme}>

      <QuoteFigure theme={props.theme}>
        <Quote theme={props.theme}>
          {props.children}
        </Quote>
        <QuoteFigureCaption
          theme={props.theme}
          source={props.source}
        />

      </QuoteFigure>
    </LayoutQuote>
  );
}

export default QuoteBox;
