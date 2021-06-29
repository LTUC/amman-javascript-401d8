const initialState = [];

export default (state = initialState, action) =>{
    const {type, payload} = action;
    switch(type) {
        case 'GET':
            console.log("payload ---->" , payload)
            return payload;
        default:
            return state;
    }
}