import React from 'react';

import If from './if';
import Else from './else';
import Modal from './modal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }

    componentDidUpdate =() => {
        console.log(" -------->>>>>> inside componentDidUpdate", this.state)
    }


    toggle = () => {
        this.setState({flag: !this.state.flag});
    }

    render() {
        return (
            <>
                <button onClick={this.toggle}>toggle</button>
                <If condition={this.state.flag}>
                    <p>Condition is true Show Me from If</p>
                    <Modal onClose={this.toggle}>
                        <p>Content of Modal</p>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </Modal>
                </If>
                <Else condition={this.state.flag}>
                    <p>Condition is False inside Else</p>
                </Else>
            </>
        )
    }
}

export default App;