import React from "react";
import styled from "styled-components";

const LayoutPopup = styled.div`
color: ${props => props.theme.highlight};
`
// TODO adicionar isto no escrita
const Popup: React.FC = (props) => {
    return (
        <LayoutPopup>

        </LayoutPopup>
    );
}

export default Popup;