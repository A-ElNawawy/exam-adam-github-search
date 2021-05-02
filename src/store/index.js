import { createStore } from "redux";

const initialState = {
  SearchField: "",
  Repos: [],
  Loading: false,
};
const appReducer = (state = { initialState }, action) => {
  if (action.type === "SearchField") {
    return {
      SearchField: action.SearchField,
      Repos: state.Repos,
      Loading: state.Loading,
    };
  }

  if (action.type === "Repos") {
    return {
      SearchField: state.SearchField,
      Repos: action.Repos,
      Loading: state.Loading,
    };
  }

  if (action.type === "Loading") {
    return {
      SearchField: state.SearchField,
      Repos: state.Repos,
      Loading: action.Loading,
    };
  }

  return state;
};

const store = createStore(appReducer);
export default store;
