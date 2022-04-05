import React from 'react';
import "./Hero.css"
import image from './batman-logo-wallpaper-preview.jpg'

const Hero = ({hero}) => {
    const {name ,comment,ratings}= hero
    return (
      <div className="card-container">
        <div className="card">
          <div className="image">
            <img className="image" src={image} alt="" srcset="" />
          </div>
          <h3 className="name">{name}</h3>
          <div className="hero-div"></div>
          <h2>
            {comment}
          </h2>
          <p>{ratings}</p>
        </div>
      </div>
    );
};

export default Hero;