import 'bootstrap/dist/css/bootstrap.min.css';
import "./portfolioStyles.css";

import { projects } from './project.model.js';

export default function PaginatedProjects() {
  return (
    <div className="container" style={{padding: '10px'}}>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card" style={{ width: '18rem', margin: '100px' }}>
              <img className="card-img-top" src={project.img} alt={`${project.name} image`} />
              <div className="card-body" style={{ margin: '10px' }}>
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.overview}</p>
                <a href={project.siteURL} className="btn btn-primary" style={{ margin: '5px' }} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.sourceURL} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
