import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import store from './store/';

function Main() {
    // console.log("store ---> ", store)
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

ReactDOM.render(<Main/>, document.getElementById("root"));