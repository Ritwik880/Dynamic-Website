import React,  { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const loginUser = async (e) =>{
        e.preventDefault();
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            }, body:JSON.stringify({
                email, 
                password
            })
        });
        const data = res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid Login");
            console.log("Invalid Login");
        }
        else {
            window.alert("Login Successful");
            console.log("Login Successful");

            history.push("/Home");

        }
    }

   

    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">Login</NavLink>
                    <NavLink class="navbar-brand" to="/signup">Signup</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/login">Go Back</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container">


                <form method="POST">

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" />
                    </div>

                    <button type="submit" name="login" value="login" onClick={loginUser} class="btn btn-primary">Submit</button>
                </form>
            </div>
            <footer>
                <p>2021: All rights reserved</p>
            </footer>

        </>
    )
}

export default Login
