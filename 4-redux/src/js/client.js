import { createStore } from 'redux'

const reducer = function(state, action) {
    if (action.type === "INC") {
        return state + action.payload;
    }
    if (action.type === 'DEC') {
        return state - action.payload;
    }
    return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch({
    type: "INC",
    payload: 1
})

store.dispatch({
    type: "INC",
    payload: 10
})

store.dispatch({
    type: "INC",
    payload: 100
})

store.dispatch({
    type: "INC",
    payload: 1000
})

store.dispatch({
    type: "DEC",
    payload: 78
})