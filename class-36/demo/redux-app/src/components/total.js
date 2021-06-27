import {connect} from 'react-redux';
const Total = props => {
    return (
        <section>Total Votes : {props.counter.totalVotes}</section>
    )
}
//1.map it 
const mapStateToProps = state => ({
    counter: state.votesCounter
});
//2.connect it 
export default connect(mapStateToProps)(Total);
