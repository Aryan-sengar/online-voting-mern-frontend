import React, { useState } from 'react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MailOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';

function Admin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleAdminLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://voting-backend-iayq.onrender.com/adminRoute/login', {
                username,
                password,
            });

            const adminData = response.data;
            if (response.status === 200 && adminData.token && adminData.adminId) {
                console.log('Admin login successful');
                navigate('/adminmain');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box login">
                    <h2 style={{ fontFamily: 'Times New Roman' }}>Admin Login</h2>
                    <form onSubmit={handleAdminLogin}>
                        <div className="input-box">
                            <span className="icon"><MailOutline /></span>
                            <input
                                type="text"
                                required
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockClosedOutline /></span>
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
