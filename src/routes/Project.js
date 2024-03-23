import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import DesignProject from "../components/DesignProject"
import Pricingcard from '../components/Pricingcard'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
    <Navbar />
    <DesignProject heading="Projects" text="Some of my most recent work" />
    <Work/>
    <Pricingcard />
    <Footer />
  </div>
  )
}

export default Project