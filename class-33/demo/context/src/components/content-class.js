
// class component needs more than one context (multiple contexts)
// <SettingsContext.Consumer></SettingsContext.Consumer>
// <ThemeContext.Consumer></ThemeContext.Consumer>
import React from 'react';
import {SettingsContext} from '../context/settingsContext'
import {ThemeContext} from '../context/themeConext'

class Content extends React.Component {
    render() {
        return (
            <div>
                <strong>Rendered From Content Class</strong>
                <SettingsContext.Consumer>
                    {
                        settingsContext=> (
                            <>
                                <h1>{settingsContext.title}</h1>
                                <a 
                                    href={`https://twitter.com/${settingsContext.twitterUser}`}
                                    target="_blank">
                                        @{settingsContext.twitterUser}
                                    </a>
                            </>
                        )
                    }
                </SettingsContext.Consumer>
                <ThemeContext.Consumer>
                    {
                        themeContext => (
                            <h2>Current Mode: {themeContext.mode}</h2>
                        )
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Content;