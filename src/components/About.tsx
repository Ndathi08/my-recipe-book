import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-heading">About</p>
        <h1 className="primary-subheading">
          Recipes: The Ultimate cullinary  canvas
        </h1>
        <p className="primary-text">
        We believe that every person has a unique recipe worth sharing. 
        Our mission is to provide a vibrant platform for cooks of all levels 
        to preserve their family traditions, showcase their creativity, and discover new favorites.
        </p>
        <p className="primary-text">
        Whether it's a cherished family recipe passed down through 
        generations or an innovative dish that you concocted on a whim,
        our platform makes it easy for you to share your recipes with the world.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Explore Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default About;