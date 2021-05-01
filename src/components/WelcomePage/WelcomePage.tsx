import "./WelcomePage.css";
import SearchBar from "./../SearchBar/SearchBar";

interface PropsInterface {}

const WelcomePage: React.FC<PropsInterface> = () => {
  return (
    <div className="WelcomePage">
      <h2>Welcome to GitHub Search App</h2>
      <h2>This App picks the forks of a repo you enter in the pattern:</h2>
      <h2>owner/:repositoryName</h2>
      <SearchBar />
    </div>
  );
};

export default WelcomePage;
