import "./Table.css";

import { AriaAttributes, DOMAttributes } from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    rel?: string;
    colspan?: string;
    className?: string;
  }
}

interface PropsInterface {
  Rows: [];
}

const Table: React.FC<PropsInterface> = ({ Rows }) => {
  //const Repos = useSelector((state: any) => state.Repos);

  let tableList = /*Repos*/ Rows?.map(
    (repo: {
      id: number;
      full_name: string;
      html_url: string;
      owner: { login: string; html_url: string };
      stargazers_count: number;
      forks_url: string;
    }) => (
      <tr key={repo.id}>
        <td>
          <a href={repo.html_url}>{repo.full_name}</a>
        </td>
        <td>
          <a href={repo.owner.html_url}>{repo.owner.login}</a>
        </td>
        <td>{repo.stargazers_count}</td>
        <td>
          <button onClick={() => {}}>Add to Favorites</button>
        </td>
      </tr>
    )
  );

  return (
    <>
      <table className="Table">
        <thead>
          <tr>
            <th colspan="4" className="TableTitle">
              Results
            </th>
          </tr>
          <tr>
            <th>Repo Name</th>
            <th>Owner</th>
            <th>No. of Stars</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableList}</tbody>
      </table>
    </>
  );
};

export default Table;
