import React, { useState, useEffect } from 'react';
import './Recommendation.css';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/carbon_footprint/all/')
      .then((response) => response.json())
      .then((data) => {
        // Find the object with the highest 'id' value
        const latestData = data.reduce((prev, current) => {
          return prev.id > current.id ? prev : current;
        });

        // Extract the 'chat_gpt_response' from the object with the highest 'id' value
        setRecommendation(latestData.chat_gpt_response);
      });
  }, []);

  return (
    <div className="recommendation-container">
      <h2>Recommendation</h2>
      <ul>
        {recommendation.split(/(\d+\..+?(?=\d+))/).filter(Boolean).map((item, index) => (
          <li key={index}>{item.trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;