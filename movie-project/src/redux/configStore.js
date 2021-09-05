const { combineReducers, compose, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

const rootReducer = combineReducers({

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store