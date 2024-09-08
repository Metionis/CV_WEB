import React from 'react'
import "../styles/stars.css";
import "../styles/languages.css";

export default function Languages() {
  return (
    <div className="languages">
      <h3>Languages</h3>
      <div className="language-item">
        <h6>Vietnamese</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
        </div>
      </div>
      <div className="language-item">
        <h6>English</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
      <div className="language-item">
        <h6>Japanese</h6>
        <div className="stars">
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star filled">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
        </div>
      </div>
    </div>
  )
}
