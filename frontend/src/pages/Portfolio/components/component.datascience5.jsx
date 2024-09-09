import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../portfolioStyles.css";

export default function DataScience5() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src="DataScience5.png"
          className="img-fluid rounded w-100"
          alt="Project"
        />
      </div>
      <div className="col-md-6">
        <h2 className="display-4">CAR PRICE PREDICTION</h2>
        <p className="lead">Did in 26/12/2023</p>
        <p>Using Python, Pandas, Numpy, Matplotlib.</p>
        <div className="d-flex flex-column flex-md-row">
          <a href="https://github.com/Metionis/Data-Analisis-Portfolio/tree/main/Car_Price_Prediction" className="btn btn-primary me-md-3 mb-2 mb-md-0" target="_blank" rel="noopener noreferrer">View Lab</a>
        </div>
      </div>
    </div>
  );
}
