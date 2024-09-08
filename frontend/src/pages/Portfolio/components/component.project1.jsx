import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../portfolioStyles.css";

export default function Prroject1() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="Project1.png"
          className="img-fluid rounded w-100"
          alt="Project"
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">Gordon Ramsay Landing Page Clone</h2>
        <p className="lead">Done from 3/5/2024 to 4/5/2024, Just for practice</p>
        <p>Using ReactJS, Javascript, CSS. For frontend development.</p>
        <div className="d-flex flex-column flex-md-row">
          <a href="https://gordon-website.vercel.app/" className="btn btn-primary me-md-3 mb-2 mb-md-0" target="_blank" rel="noopener noreferrer">View Project</a>
          <a href="https://github.com/Metionis/Gordon_website" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </div>
  );
}
