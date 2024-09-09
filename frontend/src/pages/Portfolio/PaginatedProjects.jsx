import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";
import { projects } from './project.model.js';

const PROJECTS_PER_PAGE = 9;

export default function PaginatedProjects() {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Calculate the index range of projects for the current page
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Calculate total pages needed
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update the current page
  };

  return (
    <div className="container">
      <div className="row">
        {currentProjects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4"> {/* 3 columns per row */}
            <div className="card h-100" style={{ width: '100%', margin: '0 auto' }}>
              <img className="card-img-top" src={project.img} alt={`${project.name} image`} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.overview}</p>
                <a href={project.siteURL} className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer" style={{margin: '5px'}}>View Project</a>
                <a href={project.sourceURL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
