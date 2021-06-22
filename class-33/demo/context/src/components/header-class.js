import React from 'react';

import {ThemeContext} from '../context/themeConext';

// using one context in a class component 
class Header extends React.Component {
    // special case when we're usig one context only 
    // you can use static contextType 
    // now we can access it using this.context 
    static contextType = ThemeContext;
    
    render() {
        return (
            <>
                <h2>Design</h2>
                <button onClick={this.context.toggleMode}>mode: {this.context.mode} - Don't Click Me</button>
            </>
        )
    }
}

export default Header;