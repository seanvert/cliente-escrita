import React, { useState } from "react";
import styled from "styled-components";

const LayoutPopup = styled.div`
color: ${props => props.theme.highlight};
`
// TODO adicionar isto no escrita
const Popup: React.FC = ({ text }) => {
    const [visible, setVisible] = useState(true);
    // TODO: fazer um botao de fechar no canto superior direito
    // TODO: procurar um ícone com um X
    if (visible) {
        return (
            <LayoutPopup>
                text
            </LayoutPopup>
        );
    }
}

export default Popup;