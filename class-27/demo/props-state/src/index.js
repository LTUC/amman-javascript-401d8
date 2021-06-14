import React from 'react';
import ReactDOM from 'react-dom';

import App from './my-app.js';

class Main extends React.Component {
    render() {
        return (
            <React.StrictMode>
                 <App/>
            </React.StrictMode>
        )
    }
}

const rootElement = document.getElementById('my-root');
ReactDOM.render(<Main/>, rootElement);