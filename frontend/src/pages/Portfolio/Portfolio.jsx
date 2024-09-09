import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";

import PaginatedProjects from './PaginatedProjects';

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
        <PaginatedProjects />
      </div>
    </section>
  );
}
