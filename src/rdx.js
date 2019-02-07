import {createStore, compose} from 'redux';
// npm install --save redux

const composeEnhancers = process.env.NODE_ENV !==
    'production' && typeof window !==
    'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initialState = {
    course: 'React.js'
};

function reduser(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COURSE': return {
            ...state,
            course: action.course
        };

        default: return state;
    }
}

const store = createStore(reduser, composeEnhancers());

console.log(store.getState());

const ChangeCourseToAngular = {
    type: 'CHANGE_COURSE',
    course: 'Angular.js'
};
store.dispatch(ChangeCourseToAngular);

console.log(store.getState());
