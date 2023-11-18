import React from 'react';
import './AdminMain.css';
import { Link } from 'react-router-dom';
import { CloseOutline } from 'react-ionicons'; // Import the icon

function AdminMain() {
    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: 'black', // Make text permanently white
    };

    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span> {/* Use the icon */}
                <div className="form-box login">
                    <h2>Select one :</h2>
                    <br />
                    <br />
                    <button type="submit" className="btn" id="redirectButton1">
                        <Link to="/adddelete" style={linkStyle}>Add</Link>
                    </button>
                    <button type="submit" className="btn" id="redirectButton2">
                        <Link to="/modify" style={linkStyle}>Delete</Link>
                    </button>
                    <div className="box">
                        <button className="btn">
                            <Link to="/viewvotes" style={linkStyle}>Live Voting</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;
