import React from 'react';
import './Modify.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import ModifyRow from "./ModifyRow";
import { CloseOutline } from 'react-ionicons';

function Modify() {
    const [arr,setArr] = useState([]);
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
            return <ModifyRow obj={val}/>
        })
    }

    return (
        <div>
             <div class="wrapper">
             <span class="icon-close"><CloseOutline /></span>
        <div class="form-box login">
            <table>
                <thead>
                    <tr>
                        <th>Party Name</th>
                        <th>Action</th>
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

export default Modify;
