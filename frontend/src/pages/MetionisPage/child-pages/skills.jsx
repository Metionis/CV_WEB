import React from 'react';
import "../styles/skills.css";
import "../styles/stars.css";

export default function Skills() {
  return (
    <div className="skills">
      <h3>Programming skills</h3>
      <div className="skills-items">
        <h4>Javascripts, HTML, CSS</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>ReactJS, NextJS, Vite, TailwindCSS</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>Python</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>REST API, Express</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>Figma</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>Machine Learning, Deep Learning</h4>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="skills-items">
        <h4>MongoDB, MySQL, PostgreSQL</h4>
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
