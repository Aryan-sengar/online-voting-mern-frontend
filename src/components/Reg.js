import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { PersonOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';

function Reg() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box ">
                    <h2 style={{fontFamily: 'Times New Roman'}}>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><PersonOutline /></span>
                            <input type="Email" placeholder='Username' required></input>
                            
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockClosedOutline /></span>
                           <input type="Password" placeholder='Password' required></input>
                            
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"/> I accept to the terms & conditions</label>
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
