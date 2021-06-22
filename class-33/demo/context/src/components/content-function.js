import {useContext} from 'react';
import {SettingsContext} from '../context/settingsContext';
import {ThemeContext} from '../context/themeConext';

function ContentFunction() {
    const settingsContext = useContext(SettingsContext);
    const themeContext = useContext(ThemeContext);

    return (
        <div>
            <strong>From Content Function</strong>
            <div>{settingsContext.title}</div>
            <div>Current Mode: {themeContext.mode}</div>
            <div>
                <a 
                    href={`http://twitter.com/${settingsContext.twitterUser}`}
                    target="_blank">
                    @{settingsContext.twitterUser}
                </a>
            </div>
        </div>
    )
}

export default ContentFunction;