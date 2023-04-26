import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export const TableRow = ({commit}) => {
    return (
        <tr>
            <td>{commit.author}</td>
            <td><a href={commit.url} className='link'>{commit.sha.substring(0, 7)}<FontAwesomeIcon icon={faLink} /></a></td>
        </tr>
    );
}