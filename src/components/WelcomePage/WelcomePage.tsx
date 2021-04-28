import "./WelcomePage.css";
import SearchBar from "./../SearchBar/SearchBar";

interface PropsInterface {}

const WelcomePage: React.FC<PropsInterface> = () => {
  return (
    <div className="WelcomePage">
      <h2>Welcome to GitHub Search App</h2>
      <SearchBar />
    </div>
  );
};

export default WelcomePage;
