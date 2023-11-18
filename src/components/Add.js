import React, { useState, useRef } from 'react';
import Axios from 'axios';
import './Add.css';
import { CloseOutline } from 'react-ionicons'; // Import the icon

function AddDelete(props) 
{
    const [name,setName] = useState(props.nameValue);
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name: name, votes: 0 };
        Axios.post("http://localhost:4000/voteRoute/create-vote", data)
        .then((res) => {
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err) => alert(err));
        formRef.current.reset();
    }

    return (
        <div>
            <div class="wrapper">
                <span class="icon-close"><CloseOutline /></span> {/* Use the icon */}
                <div class="form-box login">
                    <h2>Add Party:</h2>
                    <br />
                    <br />
                    <div class="new-entry">
                        <form ref={formRef}>
                            <label for="newOption" class="add">New Entry:</label>
                            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} placeholder='Party' class="form-control" type="text" id="newOption" name="newOption"/>
                            <button onClick={handleSubmit} class="btn btn-success">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDelete;
