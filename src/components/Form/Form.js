
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Google from "../google-svg";

export default function Form() {
    const [isEmpty, setStatus] = useState(true);
    // const [user, setUser] = useState('');
    const [user, setUser] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handlePassword = () => {
        let input = document.getElementsByClassName('input')[0];
        input.value = '';
        setStatus(true);    
        setUser('user');
    }

    const handleMail = () => {
        let input = document.getElementsByClassName('input')[0];
        input.value='';
        setStatus(true);
        setUser('');
    }

    return (
        <div>
            <div className="form">
                <div className="header">
                    <Google/>
                    {user?<h1>Hi there,</h1>:<h1>Sign in</h1>}
                    {user?"":<p>to contniue to Gmail</p>}
                    {user?<p style={{alignSelf: 'flex-start', fontSize: '14px', paddingTop: '30px'}}>To continue, first verify it's you</p>:""}
                </div>  
                <div className="inputBox">
                    <input className="input" onChange={(e) => setStatus(e.target.value?false:true)} placeholder={user?"Enter your password":"Email or Phone"} type={user?(showPass?"mail":"password"):"mail"}/>
                    <p className="placeholder" style={{display: isEmpty?"":"inline"}}>{user?"Enter your password":"Email or Phone"}</p>
                    {user?<span className="show-pass"><input type="checkbox" onClick={() => setShowPass(!showPass)} /><p style={{color: '#000'}}>Show Password</p></span>:<a href="/">Forgot email?</a>}
                </div>
                {user?"":<p>Not your computer? Use Guest mode to sign in privately. <a href="/">Learn more</a></p>}
                <div className="links">
                    {user?<a href="/">Forgot password?</a>:<a href="/">Create account</a>}
                    <button className="submit" onClick={() => {user?handleMail(""):handlePassword()}}>Next</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
