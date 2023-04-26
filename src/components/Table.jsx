import { TableRow } from './TableRow';

export const Table = ({commitList}) => {
    return (
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Hash</th>
            </tr>
          </thead>
          <tbody>
            {commitList.map((commit) =>
              <TableRow commit={commit} key={commit.sha}/>
            )}
          </tbody>
        </table>
    );
}