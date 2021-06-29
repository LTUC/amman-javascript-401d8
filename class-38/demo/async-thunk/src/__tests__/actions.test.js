import thunk from '../store/middleware/thunk';
import configMockStore from 'redux-mock-store';
import * as actions from '../store/actions.js';

const mockStore = configMockStore([thunk]);

describe('async Action Creator', () => {
  it('should create a GET action', async () => {
    const store = mockStore([]);
    await store.dispatch(actions.getRemoteData());
    
    const dispatchedActions = store.getActions();
    // console.log("dispatchedActions >>> ", dispatchedActions)
    expect(dispatchedActions[0].type).toEqual('GET');
 
  });
});