import React from "react";

import logo from "../assets/logo.svg";
import hand from "../assets/hand.svg";
import { Container } from '../components/Grid';

const Hero = () => (
  <div className="text-center hero my-5">
    
    <img className="mb-3 app-logo" src={hand} alt="React logo" width="100%" />
    <h1 className="mb-4">Student Participation</h1>
    
   
  </div>
);

export default Hero;
