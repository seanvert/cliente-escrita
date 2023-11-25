// Popup component 

import React from "react";
import styled from "styled-components";
import Button from './Button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
`

const LayoutPopup = styled.div`
color: ${props => props.theme.highlight};
background-color: red;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; 
`
// TODO adicionar isto no escrita
const Popup: React.FC = ({ text, visible, setVisible }) => {
    
    // TODO: fazer um botao de fechar no canto superior direito
    // TODO: procurar um ícone com um X
    function onClick () {
        window.location.replace(process.env.REACT_APP_URL + '/escrita');
    }

    if (visible) {
        return (
            <>
            {visible && <Overlay onClick={() => setVisible(false)} />}
            <LayoutPopup>
                <Button onClick={() => setVisible(false)}>X</Button>
                {text.description}
                <Button onClick={onClick}>Escrever</Button>
            </LayoutPopup>
            </>
        );
    }
}

export default Popup;