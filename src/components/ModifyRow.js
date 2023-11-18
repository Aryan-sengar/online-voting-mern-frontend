import Axios from "axios";
import { Link } from "react-router-dom";
import './Modify.css';

function ModifyRow(props) {
    const { _id, name, votes } = props.obj;

    const handleClick = () => {
        Axios.delete("http://localhost:4000/voteRoute/delete-vote/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{name}</td>
            <td class="d-flex justify-content-center">
                {/* <Link class="text-decoration-none text-light me-4" to={"/edit/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link> */}
                <button onClick={handleClick} class="btn btn-danger-a">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default ModifyRow;