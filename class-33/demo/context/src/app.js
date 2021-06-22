import {useContext} from 'react'
import Header from './components/header-class';
import Settings from './components/settings-function'
import ContentFunction from './components/content-function';
import Content from './components/content-class';
import {ThemeContext} from './context/themeConext'

import './app.scss';

function App() {

    const context = useContext(ThemeContext);

    return (
        <div className={context.mode}>
            <Header/>
            <hr/>
            <Settings/>
            <hr/>
            <ContentFunction/>
            <hr/>
            <Content/>
        </div>
    )
}

export default App;