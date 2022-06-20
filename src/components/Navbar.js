import React from 'react'
import { BrowserRouter as Router,Switch, Routes, Route, Link } from "react-router-dom";



import '../sign_in.scss'
import SignIn from "./auth/SignIn";

const Navbar = () => {
    return (
        //TODO: make its layout
        <Router>
            <header className="header">
                <a className="logo">
                    <div className="logo-gray">My&nbsp;</div>
                    <div className="logo-c">c</div>
                    <div className="logo-i">i</div>
                    <div className="logo-n">n</div>
                    <div className="logo-white">ema</div>
                </a>
                <form>
                    <input className="menu__search" type="search" placeholder="Пошук" />
                </form>
                <nav className="nav-links">
                    <ul>
                        <li><a >Фільми</a></li>
                        <li><a>Сеанси</a></li>
                        <li><a >Магазин</a></li>
                        <li><a >Акції та знижки</a></li>
                    </ul>
                </nav>
                <div className="menu__login">
                    <ul className="profile-sign-out">

                <li><Link to = "/SignIn">Вхід</Link></li>
                        <li><p>|</p></li>
                        <li><a >Реєстрація</a></li>

                    </ul>
                    <a href="">
                        <div className="menu__login-img" href=""></div>
                    </a>
                </div>
            </header>
            <Routes>
                <Route path="/SignIn" element={<SignIn />} />
            </Routes>
        </Router>
    )
}

export default Navbar;
