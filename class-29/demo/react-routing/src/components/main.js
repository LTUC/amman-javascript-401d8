import {Switch, Route} from 'react-router-dom';
import Home from './home';

const Main = props => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about-us">
                    <p>About us Page!!</p>
                </Route>
                <Route exact path="/render" render={()=><p>From Render Route</p>} />
                <Route exact path="/render/1" render={()=><p>first Item</p>} />
                <Route path="*">404</Route>
            </Switch>
        </main>
    )
}

export default Main;