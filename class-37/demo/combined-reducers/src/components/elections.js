import { increment, reset } from '../store/actions';
import {useSelector, useDispatch} from 'react-redux';

const Elections = props => {
    // this is instead of mapStateToProps.
    const state = useSelector((state)=> {
        return {
            candidatesList: state.candidates
        }
    });
    // this is instead of mapDispatchToProps.
    const dispatch = useDispatch();
    
    return (
        <section>
            <ul>
                {state.candidatesList.map((candidate, idx)=> 
                <li
                    key={idx}
                    onClick={()=> dispatch(increment(candidate.name))}>{candidate.name} : {candidate.votes}</li>)}
            </ul>
            <button onClick={()=> dispatch(reset())}>Reset All</button>
        </section>
    )
}

export default Elections;