import me from "./reducers/me";
import movie from "./reducers/movie";
import QuanLyCumRapReducer from './reducers/QuanLyCumRapReducer'
import QuanLyPhongVeReducer from './reducers/QuanLyPhongVeReducer'
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer'

const {
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} = require("redux");
const { default: thunk } = require("redux-thunk");

const rootReducer = combineReducers({
  me,
  movie,
  QuanLyCumRapReducer,
  QuanLyPhongVeReducer,
  QuanLyNguoiDungReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
