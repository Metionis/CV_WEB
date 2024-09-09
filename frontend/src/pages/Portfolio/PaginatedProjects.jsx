import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";

import Project1 from './components/component.project1';
import Project2 from './components/component.project2';
import Project3 from './components/component.project3';
import DataScience1 from './components/component.datascience1';
import DataScience2 from './components/component.datascience2';
import DataScience3 from './components/component.datascience3';
import DataScience4 from './components/component.datascience4';

// Array of all projects
const allProjects = [
  <Project1 key="1" />,
  <Project2 key="2" />,
  <Project3 key="3" />,
  <DataScience1 key="4" />,
  <DataScience2 key="5" />,
  <DataScience3 key="6" />,
  <DataScience4 key="7" />
];

const projectsPerPage = 5;

export default function PaginatedProjects() {
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;

  // Calculate the start and end indices for slicing the projects array
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  // Slice the projects array for the current page
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

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

        {/* Projects Display */}
        <div className="project-container">
          {currentProjects.map((Project, index) => (
            <div key={index} className="project-item">
              {Project}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination mt-4">
          {currentPage > 1 && (
            <Link to={`/projects/${currentPage - 1}`} className="btn btn-secondary me-2">
              Previous
            </Link>
          )}
          {currentPage < totalPages && (
            <Link to={`/projects/${currentPage + 1}`} className="btn btn-secondary">
              Next
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
