import {createSlice} from '@reduxjs/toolkit';
// createSlice
const peopleSlice = createSlice({
    name: 'people',
    initialState: [],
    reducers: {
        add(state, action) {
            console.log("action >>> ", action)
            state.push(action.payload)
        }, 
        remove(state, action) {
            return state.filter(p => p != action.payload);
        }
    }
});

console.log("peopleSlice ====> ", peopleSlice)
export const {add, remove} = peopleSlice.actions;
export default peopleSlice.reducer;
export const get = () => async dispatch => {
    console.log("Inside the get action .. will do API call")
    // 1- do the API call
    const res = await fetch('https://swapi.dev/api/people');
    const people = await res.json();
    // {results: [], count: 432}
    // 2- do the action from the reducer
    people.results.forEach(item=> dispatch(add(item.name)))
};