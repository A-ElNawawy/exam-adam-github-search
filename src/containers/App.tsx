import { /*useEffect,*/ useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import WelcomePage from "./../components/WelcomePage/WelcomePage";
import Table from "./../components/Table/Table";
import Overlay from "./../UI/Overlay/Overlay";
import Container from "./../UI/Container/Container";
import Pagination from "./../UI/Pagination/Pagination";

import { getRepo } from "./../functions/functions";

const App = () => {
  const [Loading, setLoading] = useState(false);

  const [CurrentPage, setCurrentPage] = useState<number>(1);
  const [RowsPerPage] = useState<number>(10);

  const dispatch = useDispatch();
  const SearchField = useSelector((state: any) => state.SearchField);
  const Repos = useSelector((state: any) => state.Repos);

  const handleSearchButton = () => {
    if (!SearchField.includes("/:")) {
      alert("Please Enter a valid pattern");
    } else {
      setLoading(true);
      let params = SearchField.split("/:").map((param: string) => param.trim());

      getRepo(params[0], params[1])
        .then((response) => response.json())
        .then((data) => {
          if (data.items) {
            fetch(data.items[0].forks_url)
              .then((response) => response.json())
              .then((res) => {
                console.log(res);
                dispatch({ type: "Repos", Repos: res });
                setLoading(false);
              });
          } else {
            alert("Sorry, There is no results");
            dispatch({ type: "Repos", Repos: null });
          }
        });
    }
  };

  const indexOfLastRow = CurrentPage * RowsPerPage;
  const indexOfFirstRow = indexOfLastRow - RowsPerPage;
  const currentRows = Repos?.slice(indexOfFirstRow, indexOfLastRow);
  const paginate = (number: number) => {
    setCurrentPage(number);
  };
  return (
    <div className="App">
      {Loading && <Overlay>Loading ...</Overlay>}
      <Container>
        <WelcomePage handleSearchButton={handleSearchButton} />
        {Repos && (
          <div>
            <Table Rows={currentRows} />
            <Pagination
              RowsPerPage={RowsPerPage}
              TotalRows={Repos.length}
              paginate={paginate}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
