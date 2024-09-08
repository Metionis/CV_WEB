import React from 'react';
import "../styles/skills.css";
import "../styles/stars.css";

export default function Skills() {
  return (
    <div className="skills">
      <h3>Programming skills</h3>
      <div className="skills-items">
        <h6>Javascripts, HTML, CSS</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>ReactJS, NextJS, Vite, TailwindCSS</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>Python</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>REST API, Express</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>Figma</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>Machine Learning, Deep Learning</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h6>MongoDB, MySQL, PostgreSQL</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
    </div>
  )
}
