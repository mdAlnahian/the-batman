import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {
  return (
    <div className="w-80 mx-auto banner-image">
      <div className="dummy"></div>
      <div className="dummy-text">
        <h1>
          BAT<span className="title-text">MAN</span>
        </h1>
        <h2>our super hero</h2>
        <p>
          Batman is the only superhero to save our city from externel enemy, he
          is the pride of gautam city...
        </p>
        {/* <button className="button">KNOW MORE</button> */}
        <Link to="/blogs" className="button">
          KNOW MORE
        </Link>
      </div>
    </div>
  );
};

export default Home;
