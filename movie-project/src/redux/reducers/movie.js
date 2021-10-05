import { actionTypes } from "../actions/types";

const initialState = { banner: null, movieList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOVIE_BANNER:
      state.banner = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
