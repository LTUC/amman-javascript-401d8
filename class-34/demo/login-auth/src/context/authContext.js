import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const API_SERVER = 'https://auth-api401.herokuapp.com';

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            logout: this.logout,
            user: {},
            capabilities: [],
            validateAction: this.validateAction
        }
    }

    login = async (username, password) => {
        // send username:password encoded -> add them to the Authorization header
        // prefixed with Basic XXXencoded_valueXXX
        const encoded = base64.encode(`${username}:${password}`);
        const result = await fetch(`${API_SERVER}/signin`, {
            method: 'post',
            headers: {Authorization: `Basic ${encoded}`}
        });

        let data = await result.json();
        console.log(data);
        this.validateToken(data.token);
        // verify ==> with the secret
        // decode ==> does not need the secret
    }

    validateToken = (token) => {
        // jwt.verify with the secret.
        const user = jwt.decode(token); // not very recommended
        if (user) {
            this.setAuthState(true, user, token);
        }
    }

    setAuthState = (loggedIn, user, token) => {
        this.setState({loggedIn, user});
        // add the token to the browser cookies
        cookie.save('auth-token', token);
    }

    logout = () => {
        this.setAuthState(false, {}, null);
    }

    componentDidMount = () => {
        // functional component, useEffect -> inital render
        console.log("component did mount")
        const token = cookie.load('auth-token'); // read the cookie from browser
        this.validateToken(token);
    }

    validateAction = (action) => {
        console.log(this.state.user)
        return this.state.user.capabilities.includes(action);
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;