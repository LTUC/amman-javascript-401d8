let initialState = {
    candidates: [
        {name: 'Ishaq', votes: 0},
        {name: 'Allawi', votes: 0},
        {name: 'Reem', votes: 0}
    ],
    totalVotes: 0
}
// a pure function: has no side effects, takes arguments, and returns output
// does not change anything from outside(no side effects)

// reducer : pure function
// accepts a state and an action as params -> reutrn new state
export default (state = initialState, action) => {
    let {type, payload} = action;
    console.log(action);
    switch(type) {
        case 'INCREMENT':
            let incremented = false;
            let candidates = state.candidates.map(candidate => {
                if(candidate.name == payload) {
                    incremented = true;
                    return {name: candidate.name, votes: candidate.votes+1}
                }
                return candidate
            });
            let totalVotes = incremented ? state.totalVotes + 1 : state.totalVotes;
            console.log('in increment totalVotes: ', totalVotes, candidates);
            return {candidates, totalVotes};

        case 'RESET':
            return initialState;
        default: 
            return state;
    }
}

export const increment = (name) => {
    console.log(name);
    console.log("inside our increment function for the action");
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}