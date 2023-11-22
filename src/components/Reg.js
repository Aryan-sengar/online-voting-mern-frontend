import React, { useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { PersonOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';
import Axios from 'axios';

function Reg() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await Axios.post('https://voting-backend-iayq.onrender.com/userRoute/signup', {
                username,
                password,
                key: 0, // Set the default key value here
            });

            if (response.status === 201) {
                console.log('User registered successfully');
                window.alert('Registration successful!'); 
                navigate('/main');
            } else {
                console.error('Registration failed');
                // Handle registration failure (show error message, etc.)
            }
        } catch (error) {
            console.error('Registration error:', error);
            // Handle network error or other exceptions
        }
    };

    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box ">
                    <h2 style={{ fontFamily: 'Times New Roman' }}>Registration</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-box">
                            <span className="icon"><PersonOutline /></span>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockClosedOutline /></span>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" required/> I accept the terms & conditions</label>
                        </div>
                        <button type="submit" className="btn" id="redirectButton3">Register</button>
                        <div className="Register-Link">
                            <p>Already have an account? <Link to="/main" className="login-link">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reg;
