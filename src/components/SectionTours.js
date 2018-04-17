import React from 'react';
import SectionToursCard from '../components/SectionToursCard';

const cardsInfo = [
  {
    heading: "The sea explorer",
    details: ["3 day tours", "Up to 30 people", "2 Tour guides", "Sleep in cozy hotels", "Difficulty: easy"],
    price: "300"
  },
  {
    heading: "The forest hiker",
    details: ["4 day tours", "Up to 30 people", "2 Tour guides", "Sleep in cozy hotels", "Difficulty: easy"],
    price: "400"
  },
  {
    heading: "The snow adventurer",
    details: ["5 day tours", "Up to 30 people", "2 Tour guides", "Sleep in cozy hotels", "Difficulty: easy"],
    price: "500"
  } 
];

const SectionTours = () => (
    <section className="section-tours">
      <div className="row">
        <div className="u-center-text">
          <h2 className="heading-secondary u-margin-bottom-big">
          Most Popular Tours
          </h2>
        </div>
        {cardsInfo.map((el, i) => {
          return  <SectionToursCard details={el.details} heading={el.heading} text={el.details} price={el.price} index={i+1}/>
        })}
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <a href="#" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
)

export default SectionTours;