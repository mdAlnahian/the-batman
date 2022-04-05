import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./Reviews.css"

const Reviews = () => {

  const [heros,setHeros]=useState([]);

  useEffect(()=>{
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setHeros(data));
  },[])


  return (
    <div className="review-image">
      <h1 className="text-4xl">SEE WHAT OTHER SUPERHEROS SAYS</h1>
      <div className="review-data">
        {
          heros.map(hero => <Hero key={hero.id} hero={hero}></Hero>)
        }

      </div>
    </div>
  );
};

export default Reviews;
