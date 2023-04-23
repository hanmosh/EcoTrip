import React from 'react';

export default function Recommendation() {
  const responseText = localStorage.getItem('responseText') || '';

  return (
    <div className="wrapper">
      <h2>Recommendation</h2>
      <p>{responseText}</p>
    </div>
  );
}
