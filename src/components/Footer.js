import React from 'react'
import Link from 'gatsby-link'
import logo1x from "../img/logo-green-1x.png";
import logo2x from "../img/logo-green-2x.png";
import logo1xSmall from "../img/logo-green-small-1x.png";
import logo2xSmall from "../img/logo-green-small-2x.png";

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="u-center-text">
        <picture className="footer__logo">
          <source srcSet={logo1xSmall + ' 1x,' + logo2xSmall + ' 2x'} media="(max-width: 37.5em)" src={logo1xSmall}/>
          <img srcSet={logo1x + ' 1x,' + logo2x + ' 2x'}  src={logo1x} alt="Full logo"/> 
        </picture>
        
      </div>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__nav">
          <ul className="footer__list u-margin-top-small">
            <li className="footer__item"><a href="#" className="footer__link">Company</a>
            </li>
            <li className="footer__item"><a href="#" className="footer__link">Contact us</a>
            </li>
            <li className="footer__item"><a href="#" className="footer__link">Carreers</a>
            </li>
            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a>
            </li>
            <li className="footer__item"><a href="#" className="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <div className="footer__copyright">
        <p className="footer__paragraph u-margin-top-small">
        Built Lorem ipsum <a href="#" className="footer__link ">dolor</a>, dolor sit amet consectetur adipisicing elit. Dolore ut minus libero? Quia alias beatae sint, ipsum eligendi deleniti expedita praesentium sequi veniam quaerat possimus impedit accusantium aspernatur? Nesciunt, illu Copyright &copy;
        </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
