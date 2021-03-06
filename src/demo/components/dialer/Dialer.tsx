import * as React from 'react';

import './Dialer.css';

interface DialerProps {
    handleKeyPress?: (key: string) => void;
}

export function Dialer(props: DialerProps): React.ReactElement {
    const {handleKeyPress} = props;
    return (
        <div className="dialer">
            <div className="w3-row">
                <KeyPadButton value="1" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="2" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="3" handleKeyPress={handleKeyPress} />
            </div>
            <div className="w3-row">
                <KeyPadButton value="4" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="5" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="6" handleKeyPress={handleKeyPress} />
            </div>
            <div className="w3-row">
                <KeyPadButton value="7" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="8" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="9" handleKeyPress={handleKeyPress} />
            </div>
            <div className="w3-row">
                <KeyPadButton value="*" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="0" handleKeyPress={handleKeyPress} />
                <KeyPadButton value="#" handleKeyPress={handleKeyPress} />
            </div>
        </div>
    );
}

interface KeyPadButtonProps {
    value: string;
    handleKeyPress?: (value: string) => void;
}

function KeyPadButton(props: KeyPadButtonProps): React.ReactElement {
    const {value, handleKeyPress} = props;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if (handleKeyPress) {
            handleKeyPress(value);
        }
    };
    return (<button key={value} onClick={handleClick} value={value}>{value}</button>);
}
