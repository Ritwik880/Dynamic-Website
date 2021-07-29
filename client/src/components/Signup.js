import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

    const handleInputs = (e) => {
        console.log(e);
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) =>{
        e.preventDefault();

        const {name, email, password, cpassword} = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, password,cpassword
                
            })

        });

        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Signup");
            console.log("Invalid Signup");
        }
        else{
            window.alert("Signup Successful");
            console.log("Signup Successful");

            history.push("/Login");

        }

    }

    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/login">Login</NavLink>
                    <NavLink class="navbar-brand" to="/">Signup</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/">Go Back</NavLink>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container">


                <form method="POST">
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="name" class="form-control" name="name" id="name" value={user.name} onChange={handleInputs} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" value={user.email} onChange={handleInputs} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name="password" id="password" value={user.password} onChange={handleInputs} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                        <input type="cpassword" class="form-control" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} />
                    </div>

                    <button type="submit" name="signup" value="signup" onClick={PostData}  class="btn btn-primary">Submit</button>
                </form>
            </div>
            <footer>
                <p>2021: All rights reserved</p>
            </footer>

        </>
    )
}

export default Signup
