import React from 'react';
import { useFeedbackForm } from './FeedBackLogic.js'; // Correct import path
import './feedStyles.css'; // Ensure the path is correct

export default function Feedback() {
  const {
    formData,
    success,
    error,
    handleChange,
    handleSubmit,
  } = useFeedbackForm();

  return (
    <div className='feedback'>
      <h1>GIVE ME YOUR FEEDBACK, LET ME KNOW WHAT YOU THINK</h1>
      {success && <p className="success-message">Your feedback has been submitted successfully!</p>}
      {error && <p className="error-message">Failed to submit feedback. Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <input
            type="text"
            name="name"
            placeholder='Type in your name or nickname'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='comment'>
          <textarea
            name="comment"
            placeholder='Tell me your opinion'
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
