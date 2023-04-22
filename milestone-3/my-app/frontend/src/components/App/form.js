import React, { useState } from 'react';
import './form.css';

function form() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }

  return(
    <div className="wrapper">
      <h1>Who's the goat? (its'lebron)</h1>
      {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;