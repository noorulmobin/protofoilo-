import React from 'react';
import { Navbar } from '../components/Navbar';
import {Footer} from "../components/Footer";
import DesignProject from '../components/DesignProject';
import Aboutcontent from '../components/Aboutcontent';


export default function About() {
  return (
    <div>
      <Navbar/>
      <DesignProject heading="About" text="Iam a friendly frontend web developer"/>
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}
