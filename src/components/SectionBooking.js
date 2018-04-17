import React from 'react';

const SectionBooking = () => (
    <section className="section-booking">
      <div className="row">
        <div className="book">
          <div className="book__formulaire">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">
              Start booking now!
              </h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input id="name" type="text" required className="form__input" placeholder="Full Name"/>
                <label className="form__label"  htmlFor="name">
                Full Name
                </label>
              </div>
              <div className="form__group">           
                <input id="email" type="text" required className="form__input" placeholder="Email"/>
                <label className="form__label" htmlFor="email">
              Email
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="small" name="size"/>
                  <label className="form__radio-label" htmlFor="small">
                  <span className="form__radio-button"></span>
                  Small tour group 
                  </label>
                </div>
                <div className="form__radio-group u-margin-bottom-small">
                  <input type="radio" className="form__radio-input" id="big" name="size"/>
                  <label className="form__radio-label" htmlFor="big">
                  <span className="form__radio-button"></span>
                  Big tour group </label>
                </div>
              </div>
              <div className="form__group u-margin-top-small">
                <button className="btn btn--green">Next step &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
)

export default SectionBooking;