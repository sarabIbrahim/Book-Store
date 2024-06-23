import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    //Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "") return toast.error("Email is required");
        if(password.trim() === "") return toast.error("Password is required");
    }

    // show password handler
    const showPasswordHandler = () => {
        setShowPassword(prev => !prev);/*this is for eye icon if it was false it make it true and if its true it
        make it false*/
    }


    return (
        <div className='form-wrapper'>
            <ToastContainer/>
            <h1 className="form-title">Login to your account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input value={email}
                 onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
                <input type={showPassword ? "text" : "password"} value={password}
                 onChange={e => setPassword(e.target.value)} placeholder='Password' />

                 {showPassword ?( <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>)
                 : (<i onClick={showPasswordHandler} className="bi bi-eye-fill show-password-icon"></i>)}


                <button className="form-btn">Login</button>
            </form>
            <div className="form-footer">
                Dont have an account?
                <Link to="/register" className='forms-link'>Register</Link>
            </div>
        </div>
    );
}

export default Login;
