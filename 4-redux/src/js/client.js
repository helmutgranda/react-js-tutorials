import { applyMiddleware, createStore } from "redux";
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
}

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USERS_PENDING':
            {
                return {...state, fetching: true };
            }
        case 'FETCH_USERS_REJECTED':
            {
                return {...state, fetching: false, error: action.payload };
            }
        case 'RECEIVE_USERS_FULFILLED':
            {
                return {...state, fetching: true, fetched: true, users: action.payload };
            }
    };
    return state;
};

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

store.dispatch({ type: "FETCH_USERS", payload: axios.get('http://rest.learncode.academy/api/wstern/users') })