import React from 'react'
import { NavLink } from 'react-router-dom';

const useState = () => {
    const initialData = 10;
    const [myNum, setMyNum] = React.useState(initialData);
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="#">Welcome</NavLink>
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

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container">
                <p className="para">{myNum}</p>
                <button onClick={() => setMyNum(myNum + 1)}>INCREMENT</button>
                <button onClick={() => setMyNum(myNum - 1)}>DECREMENT</button>
            </div>
            <footer>
                <p>2021: All rights reserved</p>
            </footer>
        </>
    )
}

export default useState
