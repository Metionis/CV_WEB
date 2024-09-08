// FeedbackForm.js
import { useState } from 'react';

export const useFeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://cv-web-tpt0.onrender.com/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });      

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          comment: '',
        });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return {
    formData,
    success,
    error,
    handleChange,
    handleSubmit,
  };
};
