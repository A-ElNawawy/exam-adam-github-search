import React from "react";

const SearchContext = React.createContext({
  SearchField:"",
  setSearchField: (value: string) => {},
  handleSearchButton : (SearchField: string) => {}
});

export default SearchContext;
