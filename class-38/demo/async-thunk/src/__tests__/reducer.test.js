import reducer from '../store/reducer.js';

describe('Our Reducer', () => {
  it('does a GET right', () => {
    let initialState = {};

    let action = {
      type: 'GET',
      payload: { text: 'todo_item_1' },
    };
    console.log(reducer(initialState, action))
    expect(reducer(initialState, action)).toEqual(action.payload);
  });
});