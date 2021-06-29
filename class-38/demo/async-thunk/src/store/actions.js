import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/todo';

export const getRemoteData = () => (dispatch, state) => {
    // 1- get the remote data with superagent
    // 2- then dispatch an action with the response after we get it.
    console.log("inside getRemoteData");
    console.log(dispatch);
    console.log(state)
    superagent.get(api).then(res=> {
        dispatch(getAction(res.body));
    });
}

// export const getRemoteData = () => async dispatch => {
//     // 1- get the remote data with superagent
//     // 2- then dispatch an action with the response after we get it.
//     let res = await superagent.get(api)
//     dispatch(getAction(res.body));
// }

export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}
