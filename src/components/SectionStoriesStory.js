import React from 'react';

const SectionStoriesStory = (props) => (
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={props.image} alt="Person on a tour" className="story__image"/>
            <figcaption className="story__caption">
            {props.name}
            </figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {props.heading}
            </h3>
            <p className="paragraph">{props.text}</p>
          </div>
        </div>
      </div>
)

export default SectionStoriesStory;