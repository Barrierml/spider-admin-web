import { createStore, combineReducers } from 'redux'
import _, { clone, find, reverse } from "lodash"

function allSpiders(state = { list: [] }, action) {
    switch (action.type) {
        case 'list_update':
            return { list: action.list };
        case "change_list":
            const newlist = clone(state.list);
            let s = find(newlist, { name: action.name });
            if (s) {
                Object.assign(s, action.data);
            }
            return { list: newlist };
        default:
            return state;
    }
}



export function loadLog(name, list) {
    return {
        type: "log_load",
        name,
        list,
    }
}
export function addLog(name, msg) {
    return {
        type: "log_add",
        name,
        msg,
    }
}

export function update_list(name, data) {
    store.dispatch({
        type: "change_list",
        name,
        data,
    });
}


export function changeStatus(name, ss) {
    store.dispatch({
        type: "status_change",
        name,
        status: ss,
    });
}




function status(state = {}, action) {
    switch (action.type) {
        case "status_change":
            return {
                ...state,
                ["status_" + action.name]: action.status,
            }
        default:
            return state;
    }
}


function logger(state = {}, action) {
    switch (action.type) {
        case "log_load":
            return {
                ...state,
                ["log_" + action.name]: reverse(action.list),
            }
        case "log_add":
            let list = _.clone(state["log_" + action.name]) || [];
            list.splice(0, 0, action.msg);
            return {
                ...state,
                ["log_" + action.name]: list,
            }
        case "log_clear":
            return {
                ...state,
                ["log_" + action.name]: [],
            }
        default:
            return state;
    }
}
const store = createStore(combineReducers({ allSpiders, logger, status }));
export default store;