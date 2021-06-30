import {Provider} from 'react-redux';

import store from './rtk-store';
import People from './components/people'

export default props => {
    return (
        <Provider store={store}>
            <People/>
        </Provider>
    )
}