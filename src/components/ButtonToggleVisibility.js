import React from 'react';
import Button from './Button';

function ButtonToggleVisibility({ theme, disabled, onClick }) {
    if (!disabled) {
        return (
            <Button
                onClick={onClick}
                theme={theme}>
                Começar
            </Button>
        );
    }
}

export default ButtonToggleVisibility;