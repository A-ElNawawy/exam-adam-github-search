import { useEffect, useState } from "react";

import SearchContext from "./../context/SearchContext";

import WelcomePage from "./../components/WelcomePage/WelcomePage";
import Table from "./../components/Table/Table";
import Overlay from "./../UI/Overlay/Overlay";
import Container from "./../UI/Container/Container";
import Pagination from "./../UI/Pagination/Pagination";

import { getRepo } from "./../functions/functions";

const App = () => {
  const [SearchField, setSearchField] = useState("");
  const [Repos, setRepos] = useState<[] | null>(null);
  const [Loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState<number>(1);

  //useEffect(() => {
  //  //console.log(
  //  //);
  //  getRepo(SearchField, CurrentPage)
  //    .then((response) => response.json())
  //    .then((data) => {
  //      console.log(data.items[0].forks_url);
  //      fetch(data.items[0].forks_url)
  //        .then((response) => response.json())
  //        .then((res) => {
  //          console.log(res);
  //          setRepos(res);
  //          setLoading(false);
  //        });
  //    });
  //}, [CurrentPage]);

  const handleSearchButton = (repoName: string) => {
    if (!SearchField.includes("/:")) {
      alert("Please Enter a valid pattern");
    } else {
      setLoading(true);
      let params = SearchField.split("/:").map((param) => param.trim());
      //console.log(params);

      getRepo(params[0], params[1])
        .then((response) => response.json())
        .then((data) => {
          //console.log(data.items[0].forks_url);
          if (data.items) {
            fetch(data.items[0].forks_url)
              .then((response) => response.json())
              .then((res) => {
                console.log(res);
                setRepos(res);
                setLoading(false);
              });
          } else {
            alert("Sorry, There is no results");

            setRepos(null);
          }
        });
    }
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
