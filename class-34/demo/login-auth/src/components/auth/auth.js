import {useContext} from 'react';
import {AuthContext} from '../../context/authContext';
import Show from '../show/show';
function Auth(props) {
    const {loggedIn, user, validateAction} = useContext(AuthContext);
    // loggedIn && has action access 
    return (
        <Show condition={loggedIn && validateAction(props.action)}>
            {props.children}
        </Show>
    )
}

export default Auth;