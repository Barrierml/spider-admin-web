import { createStore } from 'redux'
function allSpiders(state = {}, action) {
    switch (action.type) {
        case 'list_update':
            return { list: action.list };
        default:
            return state;
    }
}
const store = createStore(allSpiders);
export default store;