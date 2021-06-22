import React from 'react';

// create the context
export const ThemeContext = React.createContext(); 

// create a class component with a provider
class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'dark',
            toggleMode: this.toggleMode
        }
    }

    toggleMode = () => {
        // if (this.state.mode == 'dark') {
        //     this.setState({mode: 'light'});
        // } else {
        //     this.setState({mode: 'dark'});
        // }
        // this.state.mode == 'dark' ? this.setState({mode: 'light'}) : this.setState({mode: 'dark'});
        this.setState({mode: this.state.mode == 'dark' ? 'light' : 'dark'});
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;