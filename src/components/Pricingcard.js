import { Link } from 'react-router-dom';
import './Pricingstyle.css';

import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
        <div className='card-container'>
        <div className='card'>
            <h3>Basic</h3>
            <span className="bar"></span>
            <p className="price">$100</p>
            <p>- 3 Days</p>
            <p>- 3 Pages -</p>
            <p>- Featured-</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>Purchase Now</Link>
           
        </div>
        <div className='card'>
            <h3>Premium</h3>
            <span className="bar"></span>
            <p className="price">$200</p>
            <p>- 2 Days</p>
            <p>- 5 Pages -</p>
            <p>- Featured-</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>Purchase Now</Link>
           
        </div>
        <div className='card'>
            <h3>Bussiness</h3>
            <span className="bar"></span>
            <p className="price">$300</p>
            <p>- 2 Days</p>
            <p>- 8 Pages -</p>
            <p>- Featured-</p>
            <p>- Responsive Design -</p>
            <Link to="/Contact" className='btn'>Purchase Now</Link>
           
        </div>
        </div>
    </div>
  )
}

export default Pricingcard