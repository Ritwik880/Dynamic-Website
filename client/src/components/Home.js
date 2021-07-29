import React from 'react';
import { NavLink } from 'react-router-dom';
const Home = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                {/* {/* <NavLink class="navbar-brand" to="/login">Login</NavLink> */}
                <NavLink class="navbar-brand" to="/Home">Welcome</NavLink> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/about">About</NavLink>
                              </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/usestate">Project2</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="image">
                    <img src="https://source.unsplash.com/400x400/?Gaming" alt="" />
                </div>
                <p>A passionate developer and a technology enthusiast who loves to learn new things and applying technologies to solve real world problems. Besides development I like reading books, spending times with friends and I do play CSGO and PUBG to avoid coffee sometimes :).</p>
            </div>
            <footer>
                <p>2021: All rights reserved</p>
            </footer>
        </>
    );
};

export default Home;
