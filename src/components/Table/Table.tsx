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
  Repos: [];
}

const Table: React.FC<PropsInterface> = ({ Repos }) => {
  let tableList = Repos?.map(
    (repo: {
      id: number;
      full_name: string;
      owner: { login: string };
      stargazers_count: number;
      forks_url: string;
    }) => (
      <tr key={repo.id}>
        <td>{repo.full_name}</td>
        <td>{repo.owner.login}</td>
        <td>{repo.stargazers_count}</td>
        <td>
          <a href={repo.forks_url}>Forks</a>
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
            <th>Stars</th>
            <th>Fork</th>
          </tr>
        </thead>
        <tbody>{tableList}</tbody>
      </table>
    </>
  );
};

export default Table;
