import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../portfolioStyles.css";

export default function DataScience1() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="DataScience1.png"
          className="img-fluid rounded w-100"
          alt="Project"
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">House-Prices---Advanced-Regression-Techniques</h2>
        <p className="lead">Did in 22/9/2023</p>
        <p>Using Python, Pandas, Numpy, Matplotlib, Machine Learning. Reach a high accuracy.</p>
        <div className="d-flex flex-column flex-md-row">
          <a href="https://github.com/Metionis/House-Prices---Advanced-Regression-Techniques/tree/main/lab" className="btn btn-primary me-md-3 mb-2 mb-md-0" target="_blank" rel="noopener noreferrer">View Lab</a>
          <a href="https://github.com/Metionis/House-Prices---Advanced-Regression-Techniques/tree/main/data" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Data</a>
        </div>
      </div>
    </div>
  );
}
