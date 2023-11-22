import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Vote.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CloseOutline } from 'react-ionicons';

function Vote() {
    const navigate = useNavigate();
    const [parties, setParties] = useState([]);
    const [selectedParty, setSelectedParty] = useState('');

    useEffect(() => {
        Axios.get("https://voting-backend-iayq.onrender.com/voteRoute")
            .then((res) => {
                setParties(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handlePartyChange = (event) => {
        setSelectedParty(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const partyToUpdate = parties.find(party => party.name === selectedParty);
        if (partyToUpdate) {
            Axios.put(`https://voting-backend-iayq.onrender.com/voteRoute/update-vote/${partyToUpdate._id}`, { votes: partyToUpdate.votes + 1 })
                .then((res) => {
                    if (res.status === 200)
                        alert("Vote cast successfully");
                    else
                        Promise.reject();
                })
                .catch((err) => alert(err));
        }
        navigate('./thanks');
    };

    return (
        <div>
            <div class="wrapper">
            <span class="icon-close"><CloseOutline /></span>
                <div class="form-box login">
                    <h2 style={{ fontFamily: 'Times New Roman' }}>Kindly choose one</h2><br />
                    {parties.map((party, index) => (
                        <label key={index}>
                            <input type="radio" name="options" value={party.name} onChange={handlePartyChange} /><b>{party.name}</b>
                        </label>
                    ))}
                    <Link to="/thanks">
                        <button type="submit" class="btn" id="redirectButton2" onClick={handleSubmit}>Vote!</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Vote;
