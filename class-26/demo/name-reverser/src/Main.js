import React from 'react';

class Main extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        firstName : 'Omar',
        clicks: 0
      };
    }
  
    handleInputChange = e => {
      const name = e.target.value;
    //   const newState = {firstName: name, clicks: this.state.clicks };
      const newState = {...this.state, firstName: name};
      console.log("newState :", newState)
      this.setState(newState);
    }
  
    handleBtnClick = e => {
      const reversed = this.state.firstName.split('').reverse().join('');
      const newState = {firstName: reversed, clicks: this.state.clicks+1};
      this.setState(newState);
    }
  
    render() {
      return (
          <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleBtnClick}>Reverse Name</button>
            <h3>firstName : {this.state.firstName}</h3>
            <h5>Clicks: {this.state.clicks}</h5>
          </div>
      )
    }
  }
  
  export default Main;