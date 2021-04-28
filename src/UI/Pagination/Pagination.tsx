import "./Pagination.css";

interface PropsInterface {
  CurrentPage: number;
  handlePrevButton: () => void;
  handleNextButton: () => void;
}

const Pagination: React.FC<PropsInterface> = ({
  CurrentPage,
  handlePrevButton,
  handleNextButton,
}) => {
  console.log(CurrentPage);

  return (
    <div>
      <ul className="Pagination">
        <li>
          <a
            href="#void"
            className={CurrentPage === 1 ? "notAllowed" : ""}
            onClick={() => {
              handlePrevButton();
            }}
          >
            Prev
          </a>
        </li>
        <li>
          <a
            href="#void"
            onClick={() => {
              handleNextButton();
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
