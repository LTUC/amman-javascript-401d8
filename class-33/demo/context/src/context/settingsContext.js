import React, {useState} from 'react';

export const SettingsContext = React.createContext();

// make it a function component
function SettingsProvider({children}) {

    const [title, setTitle] = useState('Omar Ramadan');
    const [twitterUser, setTwitterUser] = useState('omar_ram1992');

    const state = {
        title,
        twitterUser,
        setTitle,
        setTwitterUser
    }

    return (
        <SettingsContext.Provider value={state}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider;
