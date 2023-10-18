import React from 'react';
import Button from '../Button';

function StartButton({ theme, disabled, onClick }) {
    var buttonText = "Começar";
    if (!disabled) {
        return (
            <Button
                onClick={onClick}
                theme={theme}>
                {buttonText}
            </Button>
        );
    }
}

export default StartButton;