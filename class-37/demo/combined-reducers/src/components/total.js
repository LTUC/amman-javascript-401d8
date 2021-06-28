import {connect} from 'react-redux';
const Total = props => {
    return (
        <section>Total Votes : {props.counter}</section>
    )
}
//1.map it 
const mapStateToProps = state => ({
    counter: state.votes
});
//2.connect it 
export default connect(mapStateToProps)(Total);
