import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const initialState = {
    sidebar: [
        {title: 'Программирование', url: "Программирование", icon: {nameIcon: 'code', fS: 22}},
        {title: 'Дизайн', url: "Дизайн", icon: {nameIcon: 'brush', fS: 22}},
        {title: 'Хаккинг', url: "Хаккинг", icon: {nameIcon: 'code-working', fS: 22}},
    ],
    posts: [],
    currentPage: 1,
    numberOnPage: 5
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET:POSTS":
            return Object.assign({}, state, {posts: action.payload});
        case "SET:CURRENT_PAGE":
            return Object.assign({}, state, {currentPage: action.payload});
        default:
            return state;
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = composeEnhancer(
    applyMiddleware(thunk)
);

const store = createStore(reducer, middleWare);

export default store;
