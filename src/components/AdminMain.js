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
                    <Link to="/adddelete" style={linkStyle}>
                    <button type="submit" className="btn" id="redirectButton1">
                        Add
                    </button>
                    </Link>
                    <Link to="/modify" style={linkStyle}>
                    <button type="submit" className="btn" id="redirectButton2">
                        Delete
                    </button>
                    </Link>
                    <div className="box">
                    <Link to="/viewvotes" style={linkStyle}>
                        <button className="btn">
                            Live Voting
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;
