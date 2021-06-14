import React from 'react';

class People extends React.Component {

    render() {
        console.log("child : ", this.props.results)
        return (
           <>
              {this.props.results.map((item, idx)=> {
                  return (
                        <h3 key={idx}>
                            <a 
                                href={item.url}
                                target="_blank">{item.name}
                            </a>
                        </h3>
                  )
              })}
           </>
        )
    }
}

export default People;