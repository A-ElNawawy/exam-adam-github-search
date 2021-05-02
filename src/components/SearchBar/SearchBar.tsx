import "./SearchBar.css";

import { useSelector, useDispatch } from "react-redux";

interface PropsInterface {
  handleSearchButton: () => void;
}

const SearchBar: React.FC<PropsInterface> = ({ handleSearchButton }) => {
  const dispatch = useDispatch();
  const SearchField = useSelector((state: any) => state.SearchField);

  const handleSearchFieldEdit = (SearchField: string) => {
    dispatch({ type: "SearchField", SearchField: SearchField });
  };
  return (
    <div className="SearchBar">
      <input
        type="search"
        value={SearchField}
        autoFocus
        onChange={(e) => {
          handleSearchFieldEdit(e.target.value);
        }}
        onKeyPress={(e) => {
          e.charCode === 13 && handleSearchButton();
        }}
      />
      <button onClick={handleSearchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
