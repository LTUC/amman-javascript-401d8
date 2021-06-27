import { increment, reset } from '../store/votes';
import { connect } from 'react-redux';

const Elections = props => {
    return (
        <section>
            <ul>
                {props.counter.candidates.map((candidate, idx)=> 
                <li
                    key={idx}
                    onClick={()=> props.increment(candidate.name)}>{candidate.name} : {candidate.votes}</li>)}
            </ul>
            <button onClick={props.reset}>Reset All</button>
        </section>
    )
}

// 1- add the state to this component props
const mapStateToProps = state => ({
    counter: state.votesCounter
});

// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatchToProps = {increment, reset};

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Elections);
