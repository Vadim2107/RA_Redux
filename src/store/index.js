import { createStore, combineReducers } from "redux";
import listReducer from '../reducers/listReducer';
import formReducer from '../reducers/formReducer';

const reducer = combineReducers({
    listReducer: listReducer,
    formReducer: formReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;
