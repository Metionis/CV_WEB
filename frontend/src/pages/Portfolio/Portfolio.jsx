import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";

import Project1 from './components/component.project1';
import Project2 from './components/component.project2';
import Project3 from './components/component.project3';
import DataScience1 from './components/component.datascience1';
import DataScience2 from './components/component.datascience2';
import DataScience3 from './components/component.datascience3';
import DataScience4 from './components/component.datascience4';
import DataScience5 from './components/component.datascience5';

export default function ProjectDetail() {
  return (
    <section className="project-detail py-5">
      <div className="container">
        {/* Return Button */}
        <Link to="/" className="btn return-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
            <path d="M6 8L2 12L6 16" />
            <path d="M2 12H22" />
          </svg>
          Return
        </Link>

        {/* Flexible grid layout */}
        <div className="project-container">
          <div className="project-item">
            <Project1 />
          </div>
          <div className="project-item">
            <Project2 />
          </div>
          <div className="project-item">
            <Project3 />
          </div>
          <div className="project-item">
            <DataScience1 />
          </div>
          <div className="project-item">
            <DataScience2 />
          </div>
          <div className="project-item">
            <DataScience3 />
          </div>
          <div className="project-item">
            <DataScience4 />
          </div>
          <div className="project-item">
            <DataScience5 />
          </div>
        </div>
      </div>
    </section>
  );
}
