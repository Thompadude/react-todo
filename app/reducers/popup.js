// ========================================================
// A Redux reducer. Accepts the state and the action object.
// TODO READ http://redux.js.org/docs/basics/Reducers.html
// ========================================================

export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'POP_UP':
            alert(action.message);
            return state;
        default:
            return state;
    }
}