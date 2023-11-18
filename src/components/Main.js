import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { MailOutline, LockClosedOutline, CloseOutline } from 'react-ionicons';

function Main() {
    return (
        <div>
            <div className="wrapper">
                <span className="icon-close"><CloseOutline /></span>
                <div className="form-box login">
                    <h2 style={{fontFamily: 'Times New Roman'}} >Login</h2>
                    <form>
                        <div className="input-box">
                            <span className="icon"><MailOutline /></span>
                                <input type="text" required placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="icon"><LockClosedOutline /></span>
                                <input type="Password" required placeholder="Password" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#"> Forgot Password?</a>
                        </div>
                        <Link to="/vote">
                        <button type="submit" className="btn" id="redirectButton3" >Login</button></Link>
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
