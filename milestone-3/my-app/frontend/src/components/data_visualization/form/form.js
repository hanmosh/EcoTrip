import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import openai from 'openai'; // Import OpenAI library

export default function Form() {
  const [responseText, setResponseText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const history = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);
  
    try {
      await Promise.all([sendDataToAPI(), getOpenAIResponse()]);
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (responseText) {
      // Save the responseText in localStorage and redirect to the new page with the recommendation
      localStorage.setItem('responseText', responseText);
      history('/recommendation');
    }
  }, [responseText, history]);
  

  const sendDataToAPI = async () => {
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

  const getOpenAIResponse = async () => {
    openai.api_key = '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';

    const completion = await openai.ChatCompletion.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Help me find the most efficient and detailed way to get from ${origin} to ${destination} in the most efficient way possible, while having the least amount of carbon emissions released. Calculate the estimated amount of carbon emissions released for each form of transportation.`,
        },
      ],
    });

  const chat_response = completion.choices[0].message.content;
    setResponseText(chat_response);
  };

  return (
    <div className="wrapper">
      <h2>Enter your Origin and Destination</h2>
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
        
        <Link to="/recommendation">
          <button type="submit">Submit</button>
        </Link>

      </form>
    </div>
  );
}