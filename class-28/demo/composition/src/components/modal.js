import React from 'react';
import './modal.scss';

class Modal extends React.Component {
  
    componentDidMount() {
        console.log("@@@@@@@@@ inside componentDidMount")
    }

    componentWillUnmount() {
        console.log(" :( :( inside componentWillUnmount :( :(")

    }
    render() {
        console.log(" :D :D inside render")
        return (
            <div className="modal-background">
               <div className="modal">
                   <section className="header">
                       <button onClick={this.props.onClose}>X</button>
                   </section>
                   <section className="main">
                       {this.props.children}
                   </section>
               </div>
            </div>
        )
    }
}

export default Modal;