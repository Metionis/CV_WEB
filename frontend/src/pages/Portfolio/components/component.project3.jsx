import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../portfolioStyles.css";

export default function Prroject3() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="Project3.png"
          className="img-fluid rounded w-100"
          alt="Project"
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">My Portfolio Website</h2>
        <p className="lead">Begin developing in 7/9/2024 until now. And will become better in future.</p>
        <p>Using ReactJS, Javascript, CSS, Vite, Bootstrap4 for frontend development. And using MongoDB, Express for backend development</p>
        <div className="d-flex flex-column flex-md-row">
          <a href="https://gordon-website.vercel.app/" className="btn btn-primary me-md-3 mb-2 mb-md-0" target="_blank" rel="noopener noreferrer">View Project</a>
          <a href="https://github.com/Metionis/Gordon_website" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Source Code</a>
        </div>
      </div>
    </div>
  );
}
