import Axios from "axios";
import { Link } from "react-router-dom";

function VotesListRow(props) {
    const { _id, name, votes } = props.obj;
    return (
        <tr>
            <td>{name}</td>
            <td>{votes}</td>
            {/* <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light me-4" to={"/edit-student/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td> */}
        </tr>
    )
}
export default VotesListRow;