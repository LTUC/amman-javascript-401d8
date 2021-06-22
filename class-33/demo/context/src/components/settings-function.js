import {useContext} from 'react';
import {SettingsContext} from '../context/settingsContext';

function Settings() {

    // on a functional component use useContext;
    const context = useContext(SettingsContext);
    return (
        <>
            <h2>Settings</h2>
            <label>
                <span>
                    Title &nbsp;
                </span>
                <span>{context.title}</span>
                <input 
                    placeholder="Change Title"
                    name="title"
                    type="text"
                    onChange={e=> context.setTitle(e.target.value)}/>
            </label>
            <label>
                <span>
                    Twitter Account &nbsp;
                </span>
                <span>{context.twitterUser}</span>
                <input 
                    placeholder="Change Twitter Account"
                    name="twitter"
                    type="text"
                    onChange={e=> context.setTwitterUser(e.target.value)}/>
            </label>
        </>
    )
}

export default Settings;