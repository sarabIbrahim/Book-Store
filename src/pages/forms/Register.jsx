import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    

    //Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "") return toast.error("Email is required");
        if(username.trim() === "") return toast.error("Username is required");
        if(password.trim() === "") return toast.error("Password is required");
    }

    


    return (
        <div className='form-wrapper'>
            <ToastContainer/>
            <h1 className="form-title">Create new account</h1>
            <form onSubmit={formSubmitHandler} className="form">
                <input value={email}
                 onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
                 <input value={username}
                 onChange={e => setUsername(e.target.value)} type="email" placeholder='Username' />
                <input type="password" value={password}
                 onChange={e => setPassword(e.target.value)} placeholder='Password' />


                <button className="form-btn">Register</button>
            </form>
            <div className="form-footer">
                Already have an account?
                <Link to="/login" className='forms-link'>Login</Link>
            </div>
        </div>
    );
}

export default Register;
