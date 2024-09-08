// FeedbackForm.js
import { useState } from 'react';
import { ENV_VARS } from '../../../../backend/config/envVars';


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

  const apiURL = 'https://cv-web-mu5j.onrender.com/api/feedback';  // Local development URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiURL, {
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
