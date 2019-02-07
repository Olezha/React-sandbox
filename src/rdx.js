import {createStore, compose} from 'redux';
// npm install --save redux

const composeEnhancers = process.env.NODE_ENV !==
    'production' && typeof window !==
    'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initialState = {
    course: 'React.js',
    studentsCount: 0
};

function reduser(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COURSE':
            return {
                ...state,
                course: action.course
            };

        case 'ADD_STUDENT':
            return {
                ...state,
                studentsCount: ++state.studentsCount
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

const studentsCount = document.getElementById('studentsCount');

const render = () => {
    studentsCount.innerText = store.getState().studentsCount;
};
store.subscribe(render);

store.dispatch({type: 'ADD_STUDENT'});
store.dispatch({type: 'ADD_STUDENT'});
