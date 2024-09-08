import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Projects() {
  return (
    <div className='projects'>
      <h3>Projects</h3>
      <p>
        You can go to <a href="https://github.com/Metionis" target="_blank" rel="noopener noreferrer">Github</a> or{' '}
        <Link to="/projects">click here</Link>
      </p>
    </div>
  );
}
