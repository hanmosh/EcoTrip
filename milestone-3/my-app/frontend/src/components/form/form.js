import React, { useState } from 'react';
import './form.css';

function Form() {

  const [submitting, setSubmitting] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);

    await sendDataToAPI();

    setSubmitting(false);
  };

  const sendDataToAPI = async () => {
    // Replace with the URL of your Django REST Framework API
    const apiUrl = 'http://127.0.0.1:8000/carbon_footprint/calculate/';
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ origin, destination }),
    });
  
    if (response.ok) {
      console.log('Data sent successfully');
    } else {
      console.error('Error sending data:', response.status);
    }
  };  

  return (
    <div className="wrapper">
      <h1>Origin and Destination</h1>
      {submitting && <div>Submitting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Origin</p>
            <input
              name="origin"
              value={origin}
              onChange={e => setOrigin(e.target.value)}
            />
          </label>
          <label>
            <p>Destination</p>
            <input
              name="destination"
              value={destination}
              onChange={e => setDestination(e.target.value)}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;