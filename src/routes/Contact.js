import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import DesignProject from "../components/DesignProject"
import Form from "../components/Form"
const Contact = () => {
  return (
    <div>
    <Navbar />
    <DesignProject heading="Contact" text="Let's have a chat" />
    <Form/>
    <Footer />
  </div>
  )
}

export default Contact