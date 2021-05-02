import "./Pagination.css";

interface PropsInterface {
  RowsPerPage: number;
  TotalRows: number;
  paginate: (number: number) => void;
}

const Pagination: React.FC<PropsInterface> = ({
  RowsPerPage,
  TotalRows,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(TotalRows / RowsPerPage); i++) {
    pageNumbers.push(i);
  }

  let numList = pageNumbers.map((number) => (
    <li key={number}>
      <a onClick={() => paginate(number)} href="#void">
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul className="Pagination">{numList}</ul>
    </nav>
  );
};

export default Pagination;
