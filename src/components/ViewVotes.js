import React from 'react';
import Axios from "axios";
import { useEffect, useState } from "react";
import './Modify.css';
import VotesListRow from "./VotesListRow"
import { CloseOutline } from 'react-ionicons';

function ViewVotes() {
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/voteRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[]);

    const ListItems = () =>{
        return arr.map((val,ind)=>{  //[{_id,name,email,rollNo},{},{},{}]
            return <VotesListRow obj={val}/>
        })
    }
    return (
        <div>
             <div class="wrapper">
        <span class="icon-close"><CloseOutline /></span>
        <div class="form-box login">
            <h2>Live vote count :</h2>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Party Name</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>

                {ListItems()}
                   
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}

export default ViewVotes;
