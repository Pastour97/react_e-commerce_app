import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles.jsx';


const Spinner = () => (
    <div>
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
        <h1>
            maybe try turning on your VPN...
        </h1>
    </div>
);

export default Spinner;