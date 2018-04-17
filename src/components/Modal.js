import React from 'react';
import nat8 from '../img/nat-8.jpg'
import nat9 from '../img/nat-9.jpg'

const Modal = () => (
  <div className="modal" id="modal">
    <div className="modal__content">
      <div className="modal__left">
        <img src={nat8} alt="" className="modal__img"/>
        <img src={nat9} alt="" className="modal__img"/>
      </div>
      <div className="modal__right">
      <a href="#section-tours" className="modal__close">&times;</a>
        <h2 className="heading-secondary">Start booking now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
        <p className="modal__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime culpa corporis aspernatur delectus iure omnis soluta minima? Cum optio aliquid, illo qui laborum enim excepturi in delectus ratione amet consequatur temporibus pariatur neque, incidunt necessitatibus tenetur dicta id consectetur corrupti quo. Non nemo nostrum tenetur autem a, quibusdam harum consequuntur deleniti magni modi enim aut aliquam id quas eum asperiores porro odio commodi eveniet culpa at impedit iure perspiciatis accusantium?</p>
        <a href="#" className="btn btn--green">Book now</a>
      </div>
    </div>
  </div>
)

export default Modal;