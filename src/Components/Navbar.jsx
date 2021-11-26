import React from 'react'
import {
    Link
} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">India</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ae">ae</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ar">ar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/at">at</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/au">au</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/be">be</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bg">bg</Link>
                            </li>
                        </ul>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Country
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">India</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ae">ae</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ar">ar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/at">at</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/au">au</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/be">be</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bg">bg</Link>
                                </li>
                            </ul>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
