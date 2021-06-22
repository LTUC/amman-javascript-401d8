import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './context/themeConext';
import SettingsProvider from './context/settingsContext';

import App from './app';

// we can place them in a component here 
ReactDOM.render(
    <ThemeProvider>
        <SettingsProvider>
            <App/>
        </SettingsProvider>
    </ThemeProvider>
, document.getElementById('root'));