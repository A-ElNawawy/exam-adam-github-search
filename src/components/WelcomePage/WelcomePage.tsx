import "./WelcomePage.css";
import SearchBar from "./../SearchBar/SearchBar";

interface PropsInterface {
  handleSearchButton: () => void;
}

const WelcomePage: React.FC<PropsInterface> = ({ handleSearchButton }) => {
  return (
    <div className="WelcomePage">
      <h2>Welcome to GitHub Search App</h2>
      <h2>This App picks the forks of a repo you enter in the pattern:</h2>
      <h2>owner/:repositoryName</h2>
      <SearchBar handleSearchButton={handleSearchButton} />
    </div>
  );
};

export default WelcomePage;
