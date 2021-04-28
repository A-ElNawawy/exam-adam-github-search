import { useEffect, useState } from "react";

import SearchContext from "./../context/SearchContext";

import WelcomePage from "./../components/WelcomePage/WelcomePage";
import Table from "./../components/Table/Table";
import Overlay from "./../UI/Overlay/Overlay";
import Container from "./../UI/Container/Container";
import Pagination from "./../UI/Pagination/Pagination";

import { getData } from "./../functions/functions";

const App = () => {
  const [SearchField, setSearchField] = useState("");
  const [Repos, setRepos] = useState<[] | null>(null);
  const [Loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getData(SearchField, CurrentPage)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      });
  }, [CurrentPage]);

  const handleSearchButton = (repoName: string) => {
    setLoading(true);
    getData(repoName, CurrentPage)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items);
        setLoading(false);
      });
  };

  const handlePrevButton = () => {
    let myCurrentPage = CurrentPage;
    if (myCurrentPage > 1) {
      setCurrentPage(myCurrentPage - 1);
    }
  };

  const handleNextButton = () => {
    let myCurrentPage = CurrentPage;
    setCurrentPage(myCurrentPage + 1);
  };

  return (
    <div className="App">
      {Loading && <Overlay>Loading ...</Overlay>}

      <SearchContext.Provider
        value={{ SearchField, setSearchField, handleSearchButton }}
      >
        <Container>
          <WelcomePage />
          {Repos && (
            <div>
              <Pagination
                CurrentPage={CurrentPage}
                handlePrevButton={handlePrevButton}
                handleNextButton={handleNextButton}
              />
              <Table Repos={Repos} />
            </div>
          )}
        </Container>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
