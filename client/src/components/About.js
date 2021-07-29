import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/Home">Welcome</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/Home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/usestate">Project2</NavLink>
                            </li>
to
                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container1">

                {/* <h1>Who We Are?</h1> */}
                <div class="card my-3">
                    <img src="https://source.unsplash.com/100x100/?Gaming" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <footer>
                <p>2021: All rights reserved</p>
            </footer>
        </>
    )
}

export default About
