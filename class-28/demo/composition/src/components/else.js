const Else = (props) => {
    // console.log("props ---> ", props); // {condition: true}
    if (props.condition) {
        return null
    } else {
        return props.children; 
    }
    // return props.codition ?  null: props.children ;
}
export default Else;

// export default If = ({condition, children}) => condition ? null : children;