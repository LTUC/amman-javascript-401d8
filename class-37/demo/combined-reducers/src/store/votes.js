let initialState = 0;
// a pure function: has no side effects, takes arguments, and returns output
// does not change anything from outside(no side effects)

// reducer : pure function
// accepts a state and an action as params -> reutrn new state
export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'INCREMENT':
            console.log("inside INCREMENT votes reducer")
            return state+1;
        case 'RESET':
            return initialState;
        default: 
            return state;
    }
}