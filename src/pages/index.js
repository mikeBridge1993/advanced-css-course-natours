import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Navigation from '../components/Navigation'
import SectionAbout  from '../components/SectionAbout'
import SectionBooking  from '../components/SectionBooking'
import SectionFeatures  from '../components/SectionFeatures'
import SectionTours from '../components/SectionTours'
import SectionStories from '../components/SectionStories'

const IndexPage = () => (
  <div>
    <SectionAbout />
    <SectionFeatures />
    <SectionTours />
    <SectionStories />
    <SectionBooking />
    <Footer />
    <Navigation />
    <Modal />    
  </div>
)

export default IndexPage
