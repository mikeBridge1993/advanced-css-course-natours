import React from 'react';

const SectionFeatures = () => (
    <section className="section-features">
      <div className="row">
        {["fa-globe", "fa-compass", "fa-map-o", "fa-heart-o"].map((el) => {
          return  <div className="col-1-of-4">
                    <div className="feature-box">
                      <i className={"fa u-margin-bottom-medium feature-box__icon " + el} aria-hidden="true"/>
                      <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                      <p className="feature-box__text u-margin-bottom-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia eius culpa nulla error possimus.
                      </p>
                    </div>
                  </div>
        })}
      </div>
    </section>
)

export default SectionFeatures;