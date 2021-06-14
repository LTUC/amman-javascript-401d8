import React from 'react';

class Form extends React.Component {
    
    handleSubmit = async e => {
        e.preventDefault();
        let raw = await fetch('https://swapi.dev/api/people');
        console.log("raw >>>>>>>>>>>>>>>>>>>>: ", raw)
        let data = await raw.json();
        console.log("data >>>>>>>>>>>>>>> : ", data);
        const count = data.count;
        const result = data.results;

        this.props.handler(result, count);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Get Data</button>
            </form>
        )
    }
}


export default Form;