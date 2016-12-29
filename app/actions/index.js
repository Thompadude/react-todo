// =============================================================
// A Redux action. These functions is used in reducer parameters.
// TODO READ http://redux.js.org/docs/basics/Actions.html
// =============================================================

export function alert (message){
    return {
        type: 'POP_UP',
        message
    }
}