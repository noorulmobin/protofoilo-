import React from 'react'
import { Navbar } from '../components/Navbar';
import {Design} from "../components/Design";
import {Footer} from "../components/Footer";
import Work from "../components/Work"

 const Home=()=>{
  return <div>
    <Navbar/>
    <Design/>
    <Work/>
    <Footer/>
  </div>
 };
 export default Home;