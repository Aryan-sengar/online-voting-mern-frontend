import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import { MailOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';

function Admin() {
    const loginButtonStyle = {
        textDecoration: 'none', // Remove underline
        color: 'black', // Make text color black
    };

    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box login">
                    <h2 style={{ fontFamily: 'Times New Roman' }}>Admin Login</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon"><MailOutline /></span>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockClosedOutline /></span>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Link to="/adminmain" style={loginButtonStyle}>
                            <button type="submit" className="btn">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
