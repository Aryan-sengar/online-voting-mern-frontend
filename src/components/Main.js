
import React, { useState } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MailOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';

function Main() {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
          await axios.post('https://voting-backend-iayq.onrender.com/userRoute/login', {
              username,
              password
          });

          //const { token, userId } = response.data;
          console.log('Login Successful!');

          navigate('/vote'); 
      } catch (err) {
          setError('Invalid username or password');
          console.error('Login Error:', err.message);
      }
  };
  

    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box login">
                    <h2 style={{ fontFamily: 'Times New Roman' }}>Login</h2>
                    <form onSubmit={handleLogin}>
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
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" required /> Remember me
                            </label>
                            <Link to="/reg">Forgot Password?</Link>
                        </div>
                        <button type="submit" className="btn" id="redirectButton3">Login</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="Register-Link">
                            <p>Don't have an account? <Link to="/reg">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
