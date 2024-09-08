import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";

import Project1 from './components/component.project1';
import Project2 from './components/component.project2';
import Prroject3 from './components/component.project3';

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

        {/* Ensure single-column layout */}
        <div className="single-column-layout b100">
          <Project1 />
          <Project2 />
          <Prroject3 />
        </div>
      </div>
    </section>
  );
}
