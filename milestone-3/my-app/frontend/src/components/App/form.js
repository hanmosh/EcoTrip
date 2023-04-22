import React, { useState } from 'react';
import './form.css';

function form() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000);
 }
 const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    })
  }
  return(
    <div className="wrapper">
      <h1>Who's the Goat? (its lebron) </h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
         <label>
           <p>Lebron</p>
           <select name="apple" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="fuji">Jordan</option>
               <option value="jonathan">Melo</option>
               <option value="honey-crisp">KD</option>
           </select>
         </label>
         <label>
           <p>Count</p>
           <input type="number" name="count" onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Gift Wrap</p>
           <input type="checkbox" name="gift-wrap" onChange={handleChange} />
         </label>
       </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form;