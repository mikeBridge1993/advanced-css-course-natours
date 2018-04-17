import React from 'react'
import Link from 'gatsby-link'
import NavigationItem from './NavigationItem'

const navInfo = [{header: "About Natours"}, {header: "Your benefits"}, {header: "Popular Tours"}, {header: "Stories"}, {header: "Book now"}];

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox"  id="navi-toggle"/>
    <label htmlFor="navi-toggle"   className="navigation__button"><span className="navigation__icon">&nbsp;</span></label>
    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
       {navInfo.map((el, i) => {
        return  <NavigationItem index={i+1} header={el.header}/>
       })}
      </ul>
    </nav>
  </div>
)

export default Navigation;
