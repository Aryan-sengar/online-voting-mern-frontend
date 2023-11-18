import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function header(){
    return(
        <div>
            <header style={{ padding: '10px 50px' }}>
                <h2 class="OnlineVoting" style={{color: '#d2b200', fontFamily: 'Times New Roman', fontSize: '3em', marginBottom: '15px'}}>Online Voting</h2>
                <nav class="navigation">
                    <a href="/">Home</a>
                    <a href="/">News</a>
                    <a href="/">Contact</a>
                    <a href="/">About</a>
                    <Link to="/main"  class="btnlogin-popup" style={{padding: '10px 15px', backgroundColor: '#d2b200', color: '#fff'}}>Login</Link>
                    <Link to="/admin"  class="btnlogin-popup" id="redirectButton" onClick={"/admin"} style={{padding: '10px 15px', backgroundColor: '#d2b200', color: '#fff'}}>Admin</Link>
                </nav>
            </header>
        </div>
    )
}
