import React from 'react';

const SectionToursCard = (props) => (
      <div className="col-1-of-3">
        <div className="card">
          <div className={"card__side card__side--front card__side--front-" + props.index}>
            <div className={"card__picture u-margin-bottom-small card__picture-"+ props.index}>
            </div>
            <h4 className={"card__heading card__heading-" + props.index}>
             <span className={"card__heading-span  card__heading-span-" + props.index}>
              {props.heading}
             </span>
            </h4>
            <div className={"card__details card__details-" + props.index}>
            <ul>
              {props.details.map((el) => {
                return <li>{el}</li>
              })}
            </ul>
            </div>
          </div>
          <div className={"card__side card__side--back card__side--back-"  + props.index}>
              <div className="card__cta">
                <div className="card__price-box">
                  <div className="card__price-only">Only </div>
                  <div className="card__price-value">${props.price}</div>
                </div>
                <a href="#modal" className="btn btn--white">BOOK NOW!</a>
              </div>
          </div>
        </div>
      </div>
)

export default SectionToursCard;