import "./SearchBar.css";

import { useContext } from "react";
import SearchContext from "./../../context/SearchContext";

const SearchBar = () => {
  const searchContext = useContext(SearchContext);

  return (
    <div className="SearchBar">
      <input
        type="search"
        value={searchContext.SearchField}
        autoFocus
        onChange={(e) => {
          searchContext.setSearchField(e.target.value);
        }}
        onKeyPress={(e) => {
          e.charCode === 13 &&
            searchContext.handleSearchButton(searchContext.SearchField);
        }}
      />
      <button
        onClick={() =>
          searchContext.handleSearchButton(searchContext.SearchField)
        }
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
