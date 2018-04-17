import React from 'react'
import Link from 'gatsby-link'
import logo from "../img/logo.png";

const Header = ({ siteTitle }) => (
  <div>
    <header className="header">
    <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
    </div>

    <div className="header__heading">
        <h1 className="header__heading__title">
            <span className="header__heading__title--main">Outdoors</span>
            <span className="header__heading__title--sub">is where life happens</span>
        </h1>
        <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
    </div>
    </header>
  </div>
)

export default Header
