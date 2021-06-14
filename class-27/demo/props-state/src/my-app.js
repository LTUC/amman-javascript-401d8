import React from 'react';
import Form from './form';
import People from './people';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results : [],
            count: 0
        };
    }

    handleForm = (results, count) => {
        console.log("inside Parent handleForm :D")
        this.setState({results, count});
    }

    render() {
        return (
            <>
                <Form handler={this.handleForm}/>
                <People results={this.state.results}/>
            </>
        )
    }
}

export default App;