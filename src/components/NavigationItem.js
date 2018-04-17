import React from 'react'
import Link from 'gatsby-link'

const NavigationItem = (props) => (
        <li className="navigation__item"><a href="" className="navigation__link"><span>{"0"+props.index}</span>{props.header}</a></li>
)

export default NavigationItem;
