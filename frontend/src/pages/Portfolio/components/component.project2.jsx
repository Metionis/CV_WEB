import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../portfolioStyles.css";

export default function Prroject2() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="Project2.png"
          className="img-fluid rounded w-100"
          alt="Project"
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">NETLFIX WEBSITE Clone</h2>
        <p className="lead">Done from 16/8/2024 to 20/8/2024, Just for practice</p>
        <p>Using ReactJS, Javascript, CSS, Vite. For frontend development. ExpressJS, MongoDB for backend. Deploy on Render</p>
        <div className="d-flex flex-column flex-md-row"> 
          <a href="https://netflix-clone-9pm1.onrender.com/" className="btn btn-primary me-md-3 mb-2 mb-md-0" target="_blank" rel="noopener noreferrer">View Project</a>
          <a href="https://github.com/Metionis/Netflix_Clone" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </div>
  );
}
