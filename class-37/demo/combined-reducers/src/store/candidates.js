let initialState = [
    {name: 'Ishaq', votes: 0},
    {name: 'Allawi', votes: 0},
    {name: 'Reem', votes: 0}
];

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'INCREMENT':
            console.log("inside INCREMENT candidates reducer")
            return state.map(candidate => {
                if(candidate.name == payload) {
                    return {name: candidate.name, votes: candidate.votes+1}
                }
                return candidate
            });
        case 'RESET':
            return initialState;
        default: 
            return state;
    }

}