import React from 'react';
import SectionStoriesStory from './SectionStoriesStory'
import nat8 from '../img/nat-8.jpg'
import nat9 from '../img/nat-9.jpg'
import videoMp4 from '../videos/video.mp4'
import videoWebm from '../videos/video.webm'

const storiesInfo = [
    {
      heading: "I had the best week of my life",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus perferendis nostrum quisquam incidunt pariatur praesentium voluptate voluptates cumque suscipit, delectus quaerat odio! Quia, doloremque pariatur. Asperiores veritatis dolor excepturi.",
      name: "Mary Smith",
      image: nat8
    },
    {
      heading: "Amazing, adventurous, beautiful experience",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus perferendis nostrum quisquam incidunt pariatur praesentium voluptate voluptates cumque suscipit, delectus quaerat odio! Quia, doloremque pariatur. Asperiores veritatis dolor excepturi.",
      name: "John Doe",
      image: nat9
    }
  ];
  
const SectionStories = () => (
    <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videoMp4} type="video/mp4"/>
                <source src={videoWebm} type="video/webm"/>
                Your browser is not supported!
            </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
            We make people genuinely happy
            </h2>
        </div>
        {storiesInfo.map((el, i) => {
            return  <SectionStoriesStory text={el.text} name={el.name} image={el.image} heading={el.heading}/>
        })}
        <div className="u-center-text u-margin-bottom-small">
            <a href="#" className="btn-text">Read all stories &rarr;</a>
        </div>
        </section>
)

export default SectionStories;